// //1第一种方法
// (function($) {
//   $('#div1').velocity({
//     width: '300px',
//     height: '300px',
//     opacity: 0.3
//   }, {
//     duration: 1000
//   });
//   $('#div2').velocity({
//     width: '300px',
//     height: '300px',
//     opacity: 0.3
//   }, {
//     duration: 1000,
//     delay: 1000
//   });
// })(jQuery);

// //2第二种方法
// (function($) {
//   $('#div1').velocity({
//     width: '300px',
//     height: '200px',
//     opacity: 0.3
//   }, {
//     duration: 1000,
//     complete: function() {
//       $('#div2').velocity({
//         width: '300px',
//         height: '200px',
//         opacity: 0.3
//       }, {
//         duration: 1000,
//         complete: function() {
//           $('#div3').velocity({
//             width: '300px',
//             height: '200px',
//             opacity: 0.3
//           }, {
//             duration: 1000,
//
//           });
//         }
//       });
//     }
//   });
//
// })(jQuery);

//3第三种方法
// (function($) {
//   var seq = [{
//       elements: $('#div1'),
//       properties: {
//         width: '300px',
//
//       },
//       options: {
//         duration: 1000
//       }
//     },
//     {
//       elements: $('#div2'),
//       properties: {
//         width: '300px',
//         height: '200px',
//
//       },
//       options: {
//         duration: 1000
//       }
//     },
//
//     {
//       elements: $('#div3'),
//       properties: {
//         width: '300px',
//         opacity: 0.3
//       },
//       options: {
//         duration: 1000
//       }
//     }
//   ];
//   $.Velocity.RunSequence(seq);
// })(jQuery);
// (function($) {
//   $('#div1').on('mouseover', function() {
//     $(this).velocity('callout.shake');
//   });
//   //自定义动画
//   $.Velocity.RegisterEffect('lixin.pulse', {
//     defaultDuration: 300,
//     calls: [
//       [{
//         scaleX: 1.1
//       }, 0.5],
//       [{
//         scaleX: 1.0
//       }, 0.5]
//     ]
//   });
//   $('#div2').on('mouseover', function() {
//     $(this).velocity('lixin.pulse');
//   });
//   $.Velocity.RegisterUI('lixinY.pulse', {
//     defaultDuration: 300,
//     calls: [
//       [{
//         scaleY: 1.1
//       }, 0.5],
//       [{
//         scaleY: 1.0
//       }, 0.5]
//     ]
//   });
//   $('#div3').on('mouseover', function() {
//     $(this).velocity('lixinY.pulse');
//   });
// })(jQuery);
(function($) {
  $('#div1').velocity({
    width: '300px'
  }, {
    duration: 3000
  });
})(jQuery);
