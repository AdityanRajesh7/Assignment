function daysUntilNewYear() {
    const today = new Date();
    const nextNewYear = new Date(today.getFullYear() + 1, 0, 1);
    const diffTime = nextNewYear - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
console.log(`Days until next New Year: ${daysUntilNewYear()}`);

