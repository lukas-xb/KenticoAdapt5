define([
  'core/js/adapt',
  './narrativeView',
  'core/js/models/itemsComponentModel',
  'core/js/kentico/prism'
], function(Adapt, NarrativeView, ItemsComponentModel) {

  return Adapt.register('narrativeCode', {
    model: ItemsComponentModel,
    view: NarrativeView
  });

});
