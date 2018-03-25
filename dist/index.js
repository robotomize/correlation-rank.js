'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Correlation = function () {
    function Correlation() {
        (0, _classCallCheck3.default)(this, Correlation);
    }

    (0, _createClass3.default)(Correlation, null, [{
        key: 'determination',


        /**
         *
         * @returns {number}
         */
        value: function determination(fVector, sVector) {
            return Math.pow(Correlation.rank(fVector, sVector), 2);
        }

        /**
         *
         * @param fVector
         * @param sVector
         * @returns {number}
         */

    }, {
        key: 'rank',
        value: function rank(fVector, sVector) {
            if (fVector.length === 0 || sVector.length === 0 || fVector.length !== sVector.length) {
                return 0;
            }

            var numeratorSum = Correlation._calcMultiplyVector(Correlation._calcValueDifferenceAverage(fVector, Correlation._calcAverageValue(fVector)), Correlation._calcValueDifferenceAverage(sVector, Correlation._calcAverageValue(sVector))).reduce(function (a, b) {
                return a + b;
            });

            var diffAverageSquareSumFirst = Correlation._calcValueDifferenceAverageSquare(fVector, Correlation._calcAverageValue(fVector)).reduce(function (a, b) {
                return a + b;
            }),
                diffAverageSquareSumSecond = Correlation._calcValueDifferenceAverageSquare(sVector, Correlation._calcAverageValue(sVector)).reduce(function (a, b) {
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
        key: '_calcAverageValue',
        value: function _calcAverageValue(values) {
            Correlation._validateArray(values);
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
        key: '_calcValueDifferenceAverage',
        value: function _calcValueDifferenceAverage(values, average) {
            if (!Array.isArray(values)) {
                throw new TypeError('The input data type of the first argument(values) should be an Array');
            }

            if (isNaN(average) || !average) {
                throw new TypeError('Parameter averages may not be NaN/null/undefined');
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
        key: '_calcMultiplyVector',
        value: function _calcMultiplyVector(fVector, sVector) {
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
        key: '_calcValueDifferenceAverageSquare',
        value: function _calcValueDifferenceAverageSquare(values, average) {
            return Correlation._calcValueDifferenceAverage(values, average).map(function (element) {
                return Math.pow(element, 2);
            });
        }

        /**
         *
         * @param values
         */

    }, {
        key: '_validateArray',
        value: function _validateArray(values) {
            if (!Array.isArray(values)) {
                throw new TypeError('The input data type must be Array');
            }
        }
    }]);
    return Correlation;
}();

exports.default = Correlation;


module.exports = Correlation;