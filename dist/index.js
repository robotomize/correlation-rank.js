"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Correlation = function () {
    function Correlation() {
        (0, _classCallCheck3.default)(this, Correlation);
    }

    (0, _createClass3.default)(Correlation, null, [{
        key: "calcDeterminationRank",


        /**
         *
         * @returns {number}
         */
        value: function calcDeterminationRank(fVector, sVector) {
            return Math.pow(Correlation.calcPearsonRank(fVector, sVector), 2) * 100;
        }

        /**
         *
         * @param fVector
         * @param sVector
         * @returns {number}
         */

    }, {
        key: "calcPearsonRank",
        value: function calcPearsonRank(fVector, sVector) {
            if (fVector.length === 0 || sVector.length === 0 || fVector.length !== sVector.length) {
                return 0;
            }

            var numeratorSum = Correlation.calcMultiplyVector(Correlation.calcValueDifferenceAverage(fVector, Correlation.calcAverageValue(fVector)), Correlation.calcValueDifferenceAverage(sVector, Correlation.calcAverageValue(sVector))).reduce(function (a, b) {
                return a + b;
            });

            var diffAverageSquareSumFirst = Correlation.calcValueDifferenceAverageSquare(fVector, Correlation.calcAverageValue(fVector)).reduce(function (a, b) {
                return a + b;
            }),
                diffAverageSquareSumSecond = Correlation.calcValueDifferenceAverageSquare(sVector, Correlation.calcAverageValue(sVector)).reduce(function (a, b) {
                return a + b;
            });

            var denominatorSum = Math.sqrt(diffAverageSquareSumFirst * diffAverageSquareSumSecond);

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

    }, {
        key: "calcAverageValue",
        value: function calcAverageValue(values) {
            Correlation.validateArray(values);
            return values.reduce(function (a, b) {
                return a + b;
            }) / values.length;
        }

        /**
         *
         * @param values
         * @param average
         * @returns {number}
         */

    }, {
        key: "calcValueDifferenceAverage",
        value: function calcValueDifferenceAverage(values, average) {
            if (!Array.isArray(values) || isNaN(average) || !average) {
                console.log(values);
                throw new TypeError();
            }
            return values.map(function (element) {
                return element - average;
            });
        }

        /**
         *
         * @param fVector
         * @param sVector
         */

    }, {
        key: "calcMultiplyVector",
        value: function calcMultiplyVector(fVector, sVector) {
            return fVector.map(function (element, index) {
                return element * sVector[index];
            });
        }

        /**
         *
         * @param values
         * @param average
         * @returns {number}
         */

    }, {
        key: "calcValueDifferenceAverageSquare",
        value: function calcValueDifferenceAverageSquare(values, average) {
            return Correlation.calcValueDifferenceAverage(values, average).map(function (element) {
                return Math.pow(element, 2);
            });
        }

        /**
         *
         * @param values
         */

    }, {
        key: "validateArray",
        value: function validateArray(values) {
            if (!Array.isArray(values)) {
                throw new TypeError();
            }
        }
    }]);
    return Correlation;
}();

exports.default = Correlation;


module.exports = Correlation;