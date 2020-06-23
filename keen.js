
const client = new KeenTracking({
  projectId: '5d7f9a3ac9e77c0001d056a1',
  writeKey: 'D2FC97F6029851794638ED0A17BF1BFCDCA3781ED6DBF5628D403EA1FE5B28FF3D6A178D20FB728A8D62CACF877BE90E3F04976FB633B487270A8B3392103667E68C78F4448EA52E9E78B55A70401F48668FA988CDC0588E884F7B0713B58A90'
});

client.recordEvent('purchases', {
  item: 'Avocado'
});
 

// const purchase = {
//   username: 'John Smith',
//   item: 'avocado',
//   price: 4.50
// };

// client
//   .recordEvent('purchases', purchase)
//   .then(result => {
//     console.log('Success', result);
//   })
//   .catch(err => {
//     console.log('Error', err);
//   });