export default class Correlation  {

    /**
     *
     * @returns {number}
     */
    static determination(fVector, sVector) {
        return Math.pow(Correlation.rank(fVector, sVector), 2);
    }

    /**
     *
     * @param fVector
     * @param sVector
     * @returns {number}
     */
    static rank(fVector, sVector) {
        if (fVector.length === 0 || sVector.length === 0 || fVector.length !== sVector.length) {
            return 0;
        }

        const numeratorSum = Correlation._calcMultiplyVector(
            Correlation._calcValueDifferenceAverage(fVector, Correlation._calcAverageValue(fVector)),
            Correlation._calcValueDifferenceAverage(sVector, Correlation._calcAverageValue(sVector))
        ).reduce((a, b) => a + b);

        const diffAverageSquareSumFirst = Correlation._calcValueDifferenceAverageSquare(
            fVector, Correlation._calcAverageValue(fVector)).reduce((a, b) => a + b),
            diffAverageSquareSumSecond = Correlation._calcValueDifferenceAverageSquare(
                sVector, Correlation._calcAverageValue(sVector)).reduce((a, b) => a + b);

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
    static _calcAverageValue(values) {
        Correlation._validateArray(values);
        return values.reduce((a, b) => a + b) / values.length;
    }

    /**
     *
     * @param values
     * @param average
     * @returns {number}
     */
    static _calcValueDifferenceAverage(values, average) {
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
    static _calcMultiplyVector(fVector, sVector) {
        return fVector.map((element, index) => element * sVector[index])
    }

    /**
     *
     * @param values
     * @param average
     * @returns {number}
     */
    static _calcValueDifferenceAverageSquare(values, average) {
        return Correlation
            ._calcValueDifferenceAverage(values, average)
            .map(element => Math.pow(element, 2));
    }

    /**
     *
     * @param values
     */
    static _validateArray(values) {
        if (!Array.isArray(values)) {
            throw new TypeError;
        }
    }
}

module.exports = Correlation;