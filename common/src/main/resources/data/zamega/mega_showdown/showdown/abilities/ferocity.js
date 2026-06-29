{
    isNonstandard: "Future",
        onSourceDamagingHit(damage, target, source, move) {
        if (!target.hp) return;
        if (this.checkMoveMakesContact(move, source, target)) {
            this.damage(target.baseMaxhp / 10, target, source, this.effect);
        }
    },
    flags: {},
    name: "Ferocity",
        rating: 4,
        num: 314
}