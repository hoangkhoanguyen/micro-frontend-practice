import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
    server: {
        cors: {
            origin: "*", // hoặc origin cụ thể: 'http://localhost:5173'
            // methods: ["GET", "POST"],
            allowedHeaders: ["Content-Type", "Authorization"],
        },
    },
    plugins: [
        react(),
        federation({
            name: "micro_app",
            filename: "remoteEntry.js",
            exposes: { "./Hello": "./src/Hello" },
            remotes: {},
            shared: ["react", "react-dom"],
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
});
