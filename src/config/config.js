const devConfig = { apiURL: "http://localhost:7500/api" };
const prodConfig = { apiURL: "/api" };
const exportConfig = {};

if (process.env.NODE_ENV === "production") {
	Object.assign(exportConfig, prodConfig);
} else {
	Object.assign(exportConfig, devConfig);
}

export const config = exportConfig;
