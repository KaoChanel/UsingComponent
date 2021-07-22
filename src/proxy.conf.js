const PROXY_CONFIG = [
    {
        context: [
            "/my",
            "/many",
            "/endpoints",
            "/i",
            "/need",
            "/to",
            "/proxy"
        ],
        target: "http://localhost:4200",
        secure: true,
        changeOrigin: true,
    }
]

module.exports = PROXY_CONFIG;