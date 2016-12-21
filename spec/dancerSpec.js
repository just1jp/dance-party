describe('Dance Party', function() {

  var nervousDancer, drunkDancer;

  beforeEach(function() {
    nervousDancer = new NervousDancer();
    drunkDancer = new DrunkDancer();
    nervousDancerSpy = sinon.spy();
    $(document).on('buttonClickSucess', buttonClickSuccessSpy);
  });

  it('should have a jQuery $node objects', function() {
    expect(nervousDancer.$node).to.be.an.instanceof(jQuery);
    expect(drunkDancer.$node).to.be.an.instanceof(jQuery);
  });

  // describe('Buttons', function() {
  //   it('should create drunk dancers', function() {
  //     expect()
  //   });
  // });
});
