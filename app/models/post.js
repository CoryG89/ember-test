import DS from 'ember-data';

var post = DS.Model.extend({
  indexTitle: DS.attr('string'),
  indexDescription: DS.attr('string'),
  indexCommentCount: DS.attr('string')
});

post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      indexTitle: "Some Title",
      indexDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus non quam vel dapibus. Nunc posuere purus non nunc facilisis vehicula. Pellentesque eget semper odio, eu dapibus mauris. Pellentesque mollis feugiat nunc sed euismod. Integer lectus mi, imperdiet a mollis et, luctus eu turpis. Nam faucibus arcu a sapien dignissim rhoncus. Suspendisse mollis vitae erat eu tincidunt. Vestibulum urna urna, pretium non odio sed, aliquam ultrices eros. Integer bibendum non justo nec aliquam. Sed ultricies erat in leo sagittis, nec consectetur tellus venenatis. Nullam eget lectus venenatis, convallis eros non, scelerisque sapien. In diam augue, malesuada eu risus bibendum, elementum venenatis elit. Mauris vel lectus a justo interdum ornare vitae at ligula.\n\nSuspendisse egestas varius interdum. Sed ultricies bibendum pretium. Phasellus ultricies bibendum est, ac dapibus purus porttitor a. Proin facilisis dictum metus ac facilisis. Ut eget pretium elit, in convallis diam. Praesent scelerisque urna sed gravida viverra. Vivamus sed laoreet nunc, a blandit ipsum. Duis semper dui sed interdum laoreet. Aliquam sollicitudin, urna pellentesque placerat sagittis, urna eros semper erat, tincidunt suscipit ante sapien at orci. Cras posuere justo eget sapien suscipit, sed egestas nulla pellentesque. Integer tempor viverra diam eu varius.\n\nMorbi eleifend erat nec felis congue, vel lacinia nulla suscipit. Donec vestibulum dignissim diam, eu porta odio facilisis ac. Proin placerat turpis eget ipsum pulvinar, nec blandit felis blandit. Nam et augue velit. In hac habitasse platea dictumst. In gravida fringilla tellus ac mattis. Cras mollis elit ut purus consectetur, varius porta justo suscipit. Phasellus sagittis imperdiet porta. Maecenas congue, erat ac sodales aliquet, velit odio aliquam ante, eget feugiat lorem justo sit amet neque.\n\nFusce faucibus, odio quis malesuada mattis, diam urna blandit elit, a pellentesque arcu nibh id elit. Ut blandit ligula bibendum est egestas consequat. Integer gravida non est non scelerisque. Quisque nec consectetur orci, at viverra massa. Donec iaculis sapien vitae neque commodo imperdiet. Aliquam commodo dui sit amet semper porttitor. Sed vulputate eros tortor, non mattis leo malesuada finibus.",
      indexCommentCount: 23,
      checked: false
    }
  ]
});

export default post;