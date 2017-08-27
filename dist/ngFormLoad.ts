var ngFormLoad = angular.module('ngFormLoad', []);

module ngFormLoad {
    export class NgFormLoad implements ng.IDirective {
        public restrict: string = 'A';
        public nodes: any = [];
        public isLoading: boolean = false;
        constructor(public $compile: ng.ICompileService) { }
        public link: Function = (scope: any, element: ng.IAugmentedJQuery, attrs: any) => {
            var loadingSpinner = angular.element('<div class="loader" ng-show="isLoading"><div class="loader-overlay"></div><div class="loader-inner  ball-pulse"><div class="ball-pulse"></div><div class="ball-pulse"></div><div class="ball-pulse"></div></div></div>');
            var originalHtml = element[0];
            this.wrapInner(originalHtml, 'fieldset', 'ng-disabled', 'isLoading', scope);
            this.$compile(loadingSpinner)(scope);
            element.append(loadingSpinner);
            scope.$watch(attrs.ngFormLoad, function (val) {
                scope.isLoading = val;
            });
        }

        wrapInner = (parent, wrapper, attribute, attributevalue,scope) => {
            if (typeof wrapper === "string") {
                wrapper = document.createElement(wrapper);

            }
            var div = parent.appendChild(wrapper)
                .setAttribute(attribute, attributevalue);
            this.$compile(wrapper)(scope);
            while (parent.firstChild !== wrapper) {
                wrapper.appendChild(parent.firstChild);
            }
        }

    }

    angular.module('ngFormLoad').directive('ngFormLoad', ['$compile', ($compile) => { return new ngFormLoad.NgFormLoad($compile) }]);


}
