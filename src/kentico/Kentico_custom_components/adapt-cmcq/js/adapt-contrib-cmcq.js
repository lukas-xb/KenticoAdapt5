define([
  'core/js/adapt',
  './cmcqView',
  'core/js/models/itemsQuestionModel'
], function(Adapt, cmcqView, ItemsQuestionModel) {

  return Adapt.register("cmcq", {
    view: cmcqView,
    // Extend ItemsQuestionModel to distinguish cmcqModel in
    // the inheritance chain and allow targeted model extensions.
    model: ItemsQuestionModel.extend({})
  });

});
