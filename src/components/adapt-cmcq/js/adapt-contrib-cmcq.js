define([
  'core/js/adapt',
  './cmcqView',
  'core/js/models/itemsQuestionModel'
], function(Adapt, CmcqView, ItemsQuestionModel) {

  return Adapt.register("cmcq", {
    view: CmcqView,
    // Extend ItemsQuestionModel to distinguish cmcqModel in
    // the inheritance chain and allow targeted model extensions.
    model: ItemsQuestionModel.extend({})
  });

});
