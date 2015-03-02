KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('page-help', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/page-help/1.0.0/']});