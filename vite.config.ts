import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	// When deploying to GitHub Pages the app is served from
	// https://<username>.github.io/<repo>/ so set base for production accordingly.
	base: mode === "production" ? "/hogwarts-points-react/" : "/",
	server: {
		host: "::",
		port: 8080,
	},
	plugins: [react(), mode === "development" && componentTagger()].filter(
		Boolean
	),
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
}));
