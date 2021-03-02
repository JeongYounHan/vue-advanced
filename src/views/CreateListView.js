// import ListView from './ListView';
// import bus from '../utils/bus.js';

// export default function createListView(name) {
//   return {
//     // 재사용할 인스턴스(컴포넌트) 옵션들
//     // el, created() 등 다 가능
//     name: name,
//     created() {
//       bus.$emit('start:spinner');
//       this.$store.dispatch('FETCH_LIST', this.$route.name)
//         .then(() => {
//           console.log('fetched');
//           bus.$emit('end:spinner');
//         })
//         .catch((err) => console.log(err));
//     },
//     // listView 매개로 -> 나머지 전부 필요 없게 됨
//     render(createElement) {
//       return createElement(ListView);
//     }
//   }
// }



