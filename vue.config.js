module.exports = {
	transpileDependencies: ["@gtm-support/core", "@gtm-support/vue2-gtm"],
	chainWebpack: (config) => {
		config.module
			.rule("i18n")
			.resourceQuery(/blockType=i18n/)
			.type("javascript/auto")
			.use("i18n")
			.loader("@intlify/vue-i18n-loader")
			.end();
	}
};
