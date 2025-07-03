import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "shell_app",
            filename: "remoteEntry.js",
            exposes: {},
            // remotes: { micro_app: "/micro-app/assets/remoteEntry.js" },
            remotes: { micro_app: "http://localhost:4173/assets/remoteEntry.js" },
            // shared: ["react", "react-dom"],
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
});
