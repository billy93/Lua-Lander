"use client";

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function UnityApp() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/Build/Build.loader.js",
    dataUrl: "/Build/Build.data.unityweb",
    frameworkUrl: "/Build/Build.framework.js.unityweb",
    codeUrl: "/Build/Build.wasm.unityweb",
  });

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {!isLoaded && (
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          height: "100%" 
        }}>
          <p>Loading Game...</p>
          <div style={{ 
            width: "300px", 
            height: "20px", 
            backgroundColor: "#ddd", 
            borderRadius: "10px",
            overflow: "hidden"
          }}>
            <div style={{
              width: `${loadingProgression * 100}%`,
              height: "100%",
              backgroundColor: "#4CAF50",
              transition: "width 0.3s ease"
            }} />
          </div>
          <p>{Math.round(loadingProgression * 100)}%</p>
        </div>
      )}
      <Unity 
        unityProvider={unityProvider} 
        style={{ 
          width: "100%", 
          height: "100%",
          display: isLoaded ? "block" : "none"
        }} 
      />
    </div>
  );
}