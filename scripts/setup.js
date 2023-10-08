
Hooks.on('init', () => {
    const damageTypeWaterTranslation = game.i18n.localize("DamageType.Water");
    const damageTypeEarthTranslation = game.i18n.localize("DamageType.Earth");

    CONFIG.DND5E.damageTypes['water'] = damageTypeWaterTranslation;
    CONFIG.DND5E.damageTypes['earth'] = damageTypeEarthTranslation;
});
