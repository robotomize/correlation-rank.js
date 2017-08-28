export default class Correlation  {

    /**
     *
     * @returns {number}
     */
    static calcDeterminationRank(fVector, sVector) {
        return Math.pow(Correlation.calcPearsonRank(fVector, sVector), 2);
    }

    /**
     *
     * @param fVector
     * @param sVector
     * @returns {number}
     */
    static calcPearsonRank(fVector, sVector) {
        if (fVector.length === 0 || sVector.length === 0 || fVector.length !== sVector.length) {
            return 0;
        }

        const numeratorSum = Correlation.calcMultiplyVector(
            Correlation.calcValueDifferenceAverage(fVector, Correlation.calcAverageValue(fVector)),
            Correlation.calcValueDifferenceAverage(sVector, Correlation.calcAverageValue(sVector))
        ).reduce((a, b) => a + b);

        const diffAverageSquareSumFirst = Correlation.calcValueDifferenceAverageSquare(
            fVector, Correlation.calcAverageValue(fVector)).reduce((a, b) => a + b),
            diffAverageSquareSumSecond = Correlation.calcValueDifferenceAverageSquare(
                sVector, Correlation.calcAverageValue(sVector)).reduce((a, b) => a + b);

        const denominatorSum = Math.sqrt(diffAverageSquareSumFirst * diffAverageSquareSumSecond);

        if (denominatorSum === 0) {
            return 0;
        }

        return numeratorSum / denominatorSum;
    }

    /**
     *
     * @param values
     * @returns {number}
     */
    static calcAverageValue(values) {
        Correlation.validateArray(values);
        return values.reduce((a, b) => a + b) / values.length;
    }

    /**
     *
     * @param values
     * @param average
     * @returns {number}
     */
    static calcValueDifferenceAverage(values, average) {
        if (!Array.isArray(values) || isNaN(average) || !average) {
            console.log(values);
            throw new TypeError;
        }
        return values.map(element => element - average);
    }

    /**
     *
     * @param fVector
     * @param sVector
     */
    static calcMultiplyVector(fVector, sVector) {
        return fVector.map((element, index) => element * sVector[index])
    }

    /**
     *
     * @param values
     * @param average
     * @returns {number}
     */
    static calcValueDifferenceAverageSquare(values, average) {
        return Correlation
            .calcValueDifferenceAverage(values, average)
            .map(element => Math.pow(element, 2));
    }

    /**
     *
     * @param values
     */
    static validateArray(values) {
        if (!Array.isArray(values)) {
            throw new TypeError;
        }
    }
}

module.exports = Correlation;