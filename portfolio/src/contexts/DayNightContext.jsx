import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';

const DayNightContext = createContext();

export const DayNightProvider = ({ children }) => {
  const [timeOfDay, setTimeOfDay] = useState(() => {
    const now = new Date();
    const hour = now.getHours() + now.getMinutes() / 60;
    return calculateTimeParams(hour);
  });

  const isNight = useMemo(() => {
    const hour = timeOfDay.hour;
    return hour < 6 || hour > 17;
  }, [timeOfDay.hour]);

  const skyColor = useMemo(() => calculateSkyColor(timeOfDay.hour), [timeOfDay.hour]);
  const fogColor = useMemo(() => new THREE.Color(getFogColor(timeOfDay.hour)), [timeOfDay.hour]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hour = now.getHours() + now.getMinutes() / 60;
      setTimeOfDay(calculateTimeParams(hour));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DayNightContext.Provider value={{ isNight, skyColor, fogColor, timeOfDay }}>
      {children}
    </DayNightContext.Provider>
  );
};

export const useDayNight = () => useContext(DayNightContext);

// Helpers
function getFogColor(hour) {
  if (hour >= 5 && hour < 8) return 0xffa07a; // Sunrise
  if (hour >= 8 && hour < 17) return 0x87ceeb; // Day
  if (hour >= 17 && hour < 20) return 0xff7e50; // Sunset
  return 0x0c1445; // Night
}

function calculateSkyColor(hour) {
  const colors = {
    day: 0x87ceeb,
    night: 0x0c1445,
    sunset: 0xff7e50,
    sunrise: 0xffa07a
  };
  const color = new THREE.Color();
  if (hour >= 5 && hour < 8) {
    return color.lerpColors(
      new THREE.Color(colors.sunrise),
      new THREE.Color(colors.day),
      (hour - 5) / 3
    );
  } else if (hour >= 8 && hour < 17) {
    return color.setHex(colors.day);
  } else if (hour >= 17 && hour < 20) {
    return color.lerpColors(
      new THREE.Color(colors.day),
      new THREE.Color(colors.sunset),
      (hour - 17) / 3
    );
  } else if (hour >= 20 && hour < 22) {
    return color.lerpColors(
      new THREE.Color(colors.sunset),
      new THREE.Color(colors.night),
      (hour - 20) / 2
    );
  } else {
    return color.setHex(colors.night);
  }
}

function calculateTimeParams(hour) {
  const angle = (hour / 24) * Math.PI * 2 - Math.PI / 2;
  const x = Math.cos(angle);
  const y = Math.max(Math.sin(angle), -0.2);
  const isDaytime = hour >= 6 && hour <= 18;
  const daylightProgress = isDaytime ? ((hour - 6) / 12) * Math.PI : 0;

  return {
    hour,
    sunPosition: [x, y, 0],
    lightIntensity: isDaytime ? 1.5 * Math.sin(daylightProgress) : 0.1,
    ambientIntensity: isDaytime ? 0.5 * Math.sin(daylightProgress) : 0.15
  };
}
