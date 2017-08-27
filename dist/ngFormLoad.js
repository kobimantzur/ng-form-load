var ngFormLoad = angular.module('ngFormLoad', []);
var ngFormLoad;
(function (ngFormLoad) {
    var NgFormLoad = (function () {
        function NgFormLoad($compile) {
            var _this = this;
            this.$compile = $compile;
            this.restrict = 'A';
            this.nodes = [];
            this.isLoading = false;
            this.link = function (scope, element, attrs) {
                var loadingSpinner = angular.element('<div class="loader" ng-show="isLoading"><div class="loader-overlay"></div><div class="loader-inner  ball-pulse"><div class="ball-pulse"></div><div class="ball-pulse"></div><div class="ball-pulse"></div></div></div>');
                var originalHtml = element[0];
                _this.wrapInner(originalHtml, 'fieldset', 'ng-disabled', 'isLoading', scope);
                _this.$compile(loadingSpinner)(scope);
                element.append(loadingSpinner);
                scope.$watch(attrs.ngFormLoad, function (val) {
                    scope.isLoading = val;
                });
            };
            this.wrapInner = function (parent, wrapper, attribute, attributevalue, scope) {
                if (typeof wrapper === "string") {
                    wrapper = document.createElement(wrapper);
                }
                var div = parent.appendChild(wrapper)
                    .setAttribute(attribute, attributevalue);
                _this.$compile(wrapper)(scope);
                while (parent.firstChild !== wrapper) {
                    wrapper.appendChild(parent.firstChild);
                }
            };
        }
        return NgFormLoad;
    }());
    ngFormLoad.NgFormLoad = NgFormLoad;
    angular.module('ngFormLoad').directive('ngFormLoad', ['$compile', function ($compile) { return new ngFormLoad.NgFormLoad($compile); }]);
})(ngFormLoad || (ngFormLoad = {}));
