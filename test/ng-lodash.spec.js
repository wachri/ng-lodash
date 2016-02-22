// Tests the ng-lodash module has access to lodash functions as accessible
describe('ng-lodash', function () {

    beforeEach(module('ngLodash'));

    it('should have lodash as a constant defined', inject(function (lodash) {
        expect(lodash).toBeDefined();
    }));

    it('should contain the lodash bindAll function', inject(function (lodash) {
        expect(lodash.bindAll).toBeDefined();
    }));
});
