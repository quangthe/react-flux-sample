var initData = {
  envList: [
    {id: 1, name: 'Live', spaces: [
      {id: 1, name: 'Corporate site'},
      {id: 2, name: 'QA site'},
      {id: 3, name: 'Live site'}
    ]},
    {id: 2, name: 'QA', spaces: [
      {id: 1, name: 'Corporate site'},
      {id: 2, name: 'QA site'}
    ]},
    {id: 3, name: 'Development', spaces: [
      {id: 2, name: 'QA site'},
      {id: 3, name: 'Live site'}
    ]}
  ],
  instanceList: [
    {
      id: '1',
      name: 'Public instance 1',
      version: '1',
      status: 'ok'
    },
    {
      id: '2',
      name: 'Public instance 2',
      version: '2',
      status: 'not ok'
    },
    {
      id: '3',
      name: 'Public instance 3',
      version: '2',
      status: 'ok'
    },
    {
      id: '4',
      name: 'Public instance 4',
      version: '3',
      status: 'ko'
    }
  ],
  messages: {
    requiredField: 'Please input required field(s)'
  }
};

module.exports = initData;