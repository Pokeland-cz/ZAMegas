{
    onSourceAfterFaint(length, target, source, effect) {
    if (effect && effect.effectType === "Move") {
        const bestStat = source.getBestStat(true, true);
        this.boost({
            [bestStat]: length
        }, source);
    }
},
    onTryHit(target, source, move) {
    if (move.type === 'Ground' && !move.ignoreImmunity) {
        this.add('-immune', target, '[from] ability: Eelevate');
        return null;
    }
},
    flags: {
        breakable: 1
    },
    name: "Eelevate",
        rating: 4.5,
    num: 315
}