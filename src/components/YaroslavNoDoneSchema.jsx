export const AAAA = () => {
    const data = {
        "type": "object",
        "required": [],
        "properties": {
            "operator_name": {
                "key": "operator_name",
                "title": "Оператор мобильной связи",
                "value": "МегаФон",
                "choises": [
                    "МегаФон",
                    "Билайн",
                    "МТС"
                ],
                "read_only": false,
                "view_type": "select",
                "enum": [
                    "МегаФон",
                    "Билайн",
                    "МТС"
                ],
                "enumNames": [
                    "МегаФон",
                    "Билайн",
                    "МТС"
                ],
                "type": "string",
                "default": "МегаФон"
            },
            "sim_type": {
                "key": "sim_type",
                "title": "Тип сим-карты",
                "value": "Новая",
                "choises": [
                    "Новая",
                    "Переоформление старой"
                ],
                "read_only": false,
                "view_type": "select",
                "enum": [
                    "Новая",
                    "Переоформление старой"
                ],
                "enumNames": [
                    "Новая",
                    "Переоформление старой"
                ],
                "type": "string",
                "default": "Новая"
            },
            "office_name": {
                "key": "office_name",
                "title": "Место получения сим-карты",
                "value": "Другое",
                "choises": [
                    "Офис КАЛИТНИКИ",
                    "Офис ОАЗИС/ДОБРЫНИНСКИЙ",
                    "Офис ФАКТОРИЯ",
                    "Другое"
                ],
                "read_only": false,
                "view_type": "select",
                "enum": [
                    "Офис КАЛИТНИКИ",
                    "Офис ОАЗИС/ДОБРЫНИНСКИЙ",
                    "Офис ФАКТОРИЯ",
                    "Другое"
                ],
                "enumNames": [
                    "Офис КАЛИТНИКИ",
                    "Офис ОАЗИС/ДОБРЫНИНСКИЙ",
                    "Офис ФАКТОРИЯ",
                    "Другое"
                ],
                "type": "string",
                "default": "Другое"
            },
            "address": {
                "key": "address",
                "title": "Адрес доставки сим-карты",
                "value": "г Москва, р-н Марьина роща, проезд 11-й Марьиной Рощи",
                "read_only": false,
                "view_type": "dadata",
                "type": "string",
                "default": "г Москва, р-н Марьина роща, проезд 11-й Марьиной Рощи"
            },
            "apartment": {
                "key": "apartment",
                "title": " Номер квартиры/комнаты/помещения",
                "value": "1",
                "read_only": false,
                "view_type": "text",
                "type": "string",
                "default": "1"
            },
            "commentary": {
                "key": "commentary",
                "title": "Комментарий инициатора",
                "value": null,
                "read_only": false,
                "view_type": "text",
                "type": "string"
            },
            "sunc_test_display": {
                "key": "sunc_test_display",
                "title": "Test sunc block",
                "value": null,
                "read_only": false,
                "view_type": "toChangeSelectionPlu",
                "changeable": true,
                "type": "string"
            },
            "sunc_test_change": {
                "key": "sunc_test_change",
                "title": "Test sunc block",
                "value": null,
                "read_only": false,
                "view_type": "toDisplaySelectionKits",
                "changeable": true,
                "type": "string"
            },
            "test_checkbox": {
                "key": "test_checkbox",
                "title": "Test checkbox",
                "value": false,
                "read_only": false,
                "view_type": "boolean",
                "requiredForSubmit": true,
                "type": "boolean"
            },
            "test_checkbox_2": {
                "key": "test_checkbox_2",
                "title": "Test checkbox two",
                "value": false,
                "read_only": false,
                "view_type": "boolean",
                "requiredForSubmit": true,
                "type": "boolean"
            }
        }
    }
    return (
        <h1>Hello</h1>
    )
}
function transformInputData(inputData) {
  const dependencies = {};

  inputData.forEach(item => {
    if (item.enum) { // Добавляем проверку на наличие enum
      if (!dependencies[item.key]) {
        dependencies[item.key] = { oneOf: [] };
      }

      item.enum.forEach(enumValue => {
        const dependency = {
          properties: {
            [item.key]: {
              enum: [enumValue]
            }
          }
        };

        if (item.chidren_key && enumValue === item.chidren_value) {
          const childItem = inputData.find(child => child.key === item.chidren_key);
          if (childItem) { // Добавляем проверку на наличие childItem
            dependency.properties[item.chidren_key] = {
              type: childItem.type,
              title: childItem.title
            };
            if (childItem.enum) {
              dependency.properties[item.chidren_key].enum = childItem.enum;
            }
            dependency.required = [item.chidren_key];
          }
        }

        dependencies[item.key].oneOf.push(dependency);
      });
    }
  });

  return { dependencies };
}


// Usage example
const inputData = [
  {
    key: 'sim',
    type: 'string',
    title: 'Тип сим-карты',
    enum: ['Новая', 'Переоформление'],
    chidren_key: 'office',
    chidren_value: 'Новая',
  },
  {
    key: 'office',
    type: 'string',
    title: 'Место получения сим-карты.',
    enum: [
      'Офис КАЛИТНИКИ',
      'Офис ОАЗИС/ДОБРЫНИНСКИЙ',
      'Офис ФАКТОРИЯ',
      'Другое',
    ],
    chidren_key: 'address',
    chidren_value: 'Другое',
  },
  {
    key: 'address',
    title:
      'Выберите из справочника адрес получения новой сим-карты (индекс, область, город, улица, дом, корпус/строение).',
    type: 'string',
    chidren_key: '',
    chidren_value: '',
  },
  {
    key: 'gender',
    title: 'Укажите ваш пол',
    enum: ['Мужской', 'Женский', 'Другое'],
    type: 'string',
    chidren_key: 'commentary_gender',
    chidren_value: 'Другое',
  },
  {
    key: 'commentary_gender',
    title: 'Подскажите какой ваш пол',
    type: 'string',
    chidren_key: '',
    chidren_value: '',
  },
  ]
const result = transformInputData(inputData);
console.log({result});
console.log(JSON.stringify(result));









  const newData = {
    "title": "Custom Schema",
    "type": "object",
    "properties": {
      "educationLevel": {
        "type": "string",
        "title": "Уровень образования",
        "enum": [
          "higher",
          "secondarySpecial"
        ]
      }
    },
    "dependencies": {
      "educationLevel": {
        "oneOf": [
          {
            "properties": {
              "educationLevel": {
                "enum": [
                  "higher"
                ]
              },
              "universityDetails": {
                "type": "object",
                "title": "Детали об университете",
                "properties": {
                    "enum": [
                        "car",
                        "Comp"
                    ]
                }
              }
            },
            "required": [
              "universityDetails"
            ]
          },
          {
            "properties": {
              "educationLevel": {
                "enum": [
                  "secondarySpecial"
                ]
              }
            }
          }
        ]
      },
      "universityDetails": {
        "oneOf": [
          {
            "properties": {
              "universityDetails": {
                "enum": [
                  "car",
                ]
              },
              "carDetails": {
                "type": "string",
                "title": "Напишите какую машину хотите"
              }
            },
            "required": ["car"]
          },
          {
            "properties": {
              "universityDetails": {
                "enum": [
                  "Comp"
                ]
              }
            }
          }
        ]
      }
    }
  }

  const inputData2 = [ 
    {
        "key": "operator_name",
        "title": "Оператор мобильной связи",
        "enum": [
            "МегаФон",
            "МТС",
            "Другое"
        ],
        "type": "string",
        chidren_key: "commentary",
        chidren_value: "Другое",
    }, 
    {
        "key": "commentary",
        "title": "Комментарий инициатора",
        "type": "string",
        chidren_key: "",
        chidren_value: "",
    },
    {
    key: "sim",
    type: "string",
    title: "Тип сим-карты",
    enum: [
        "Новая",
        "Переоформление"
    ],
    chidren_key: "office",
    chidren_value: "Новая"
},
{
    key: "office",
    "type": "object",
    title: "Место получения сим-карты.",
    enum: [
        {
            "name": "Офис КАЛИТНИКИ",
            "value": "kalitniki"
        },
        {
            "name": "Офис ОАЗИС/ДОБРЫНИНСКИЙ",
            "value": "dobrininsky"
        },
        {
            "name": "Офис ФАКТОРИЯ",
            "value": "factory"
        },
        {
            "name": "Другое",
            "value": "other"
        }
    ],
    chidren_key: "address",
    chidren_value: {
        "name": "Другое",
        "value": "other"
    },
},
{
    key: "address",
    "title": "Выберите из справочника адрес получения новой сим-карты (индекс, область, город, улица, дом, корпус/строение).",
    "type": "string",
    chidren_key: "",
    chidren_value: "",
}];
const dfasdas = {
    "type": "object",
    "title": "Оформление корпоративной мобильной связи",
    "required": [
      "sim"
    ],
    "properties": {
      "type": "string",
      "title": "Тип сим-карты",
      "sim": {
        "enum": [
          "Новая",
          "Переоформление"
        ]
      }
    },
    "dependencies": {
      "sim": {
        "oneOf": [
          {
            "required": [
              "office"
            ],
            "properties": {
              "sim": {
                "enum": [
                  "Новая"
                ]
              }
            },
            "office": {
              "type": "object",
              "title": "Место получения сим-карты.",
              "properties": {
                "name": {
                  "type": "string"
                },
                "value": {
                  "type": "string"
                }
              },
              "listOptions": [
                {
                  "name": "Офис КАЛИТНИКИ",
                  "value": "kalitniki"
                },
                {
                  "name": "Офис ОАЗИС/ДОБРЫНИНСКИЙ",
                  "value": "dobrininsky"
                },
                {
                  "name": "Офис ФАКТОРИЯ",
                  "value": "factory"
                },
                {
                  "name": "Другое",
                  "value": "other"
                }
              ]
            }
          },
          {
            "properties": {
              "sim": {
                "enum": [
                  "Переоформление"
                ]
              }
            }
          }
        ]
      },
      "office": {
        "oneOf": [
          {
            "properties": {
              "office": {
                "enum": [
                  {
                    "name": "Офис КАЛИТНИКИ",
                    "value": "kalitniki"
                  }
                ]
              }
            }
          },
          {
            "properties": {
              "office": {
                "enum": [
                  {
                    "name": "Офис ОАЗИС/ДОБРЫНИНСКИЙ",
                    "value": "dobrininsky"
                  }
                ]
              }
            }
          },
          {
            "properties": {
              "office": {
                "enum": [
                  {
                    "name": "Офис ФАКТОРИЯ",
                    "value": "factory"
                  }
                ]
              }
            }
          },
          {
            "required": [
              "address"
            ],
            "properties": {
              "office": {
                "enum": [
                  {
                    "name": "Другое",
                    "value": "other"
                  }
                ]
              },
              "address": {
                "title": "Выберите из справочника адрес получения новой сим-карты (индекс, область, город, улица, дом, корпус/строение).",
                "type": "string"
              }
            }
          }
        ]
      }
    }
  }


  export const testTaskInfoVer3 = {
    status: 'ok',
    data: {
      mode: 'EMPLOYEE',
      completed_at: null,
      created_at: '2023-11-09T14:13:23.160000+00:00',
      comment: null,
      updated_at: '2023-11-09T14:13:23.316766+00:00',
      object_type: 'EMPLOYEE',
      deadline: '2023-11-13T20:59:59+00:00',
      description:
        '\u041f\u0440\u043e\u0441\u044c\u0431\u0430 \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u043e \u0437\u0430\u044f\u0432\u043a\u0435 \u043d\u0430 \u0432\u044b\u0434\u0430\u0447\u0443 \u0442\u043e\u043f\u043b\u0438\u0432\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b.',
      process:
        '\u0412\u044b\u043f\u0443\u0441\u043a \u0442\u043e\u043f\u043b\u0438\u0432\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b',
      client_id: 'lk2_camunda',
      title:
        '\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0432\u044b\u043f\u0443\u0441\u043a \u0442\u043e\u043f\u043b\u0438\u0432\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b \u043e\u0442 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430 \u041c\u0438\u0440\u0437\u043e\u0435\u0432 \u0411\u0435\u0445\u0440\u0443\u0437 \u0421\u0438\u0434\u0436\u043e\u0438\u0434\u0434\u0438\u043d\u043e\u0432\u0438\u0447',
      status:
        '\u041d\u0430 \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u0438\u0438',
      detail: {
        version: 3,
        next_step: true,
        detail_extra: {
          tabs: [
            {
              key: 'info',
              title:
                '\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0443',
              fields: [
                'initiator_fullname',
                'initiator_tn',
                'initiator_phone_number',
                'initiator_staff_name',
                'initiator_org_unit_name',
                'initiator_bend',
                'initiator_car_make',
                'initiator_car_model',
              ],
              actions: [],
              isSelected: true,
            },
            {
              key: 'info_sim',
              title:
                '\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0442\u043e\u043f\u043b\u0438\u0432\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u0435',
              fields: [
                'fuel_cards_type',
                'address',
                'fuel_company',
                'fuel_type',
                'limit_bend',
                'requested_limit',
                'temporary_limit',
                'temporary_limit_start_date',
                'temporary_limit_end_date',
                'initiator_mvz',
                'commentary',
              ],
              actions: ['done', 'specify', 'correct'],
              isSelected: false,
            },
          ],
          fields: [
            {
              key: 'initiator_fullname',
              title:
                '\u0424\u0418\u041e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430',
              value:
                '\u041c\u0438\u0440\u0437\u043e\u0435\u0432 \u0411\u0435\u0445\u0440\u0443\u0437 \u0421\u0438\u0434\u0436\u043e\u0438\u0434\u0434\u0438\u043d\u043e\u0432\u0438\u0447',
              read_only: true,
              view_type: 'text',
            },
            {
              key: 'initiator_tn',
              title:
                '\u0422\u0430\u0431\u0435\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430',
              value: '02136459',
              read_only: true,
              view_type: 'text',
            },
            {
              key: 'initiator_phone_number',
              title:
                '\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430',
              value: '+79999999999',
              read_only: true,
              view_type: 'text',
            },
            {
              key: 'initiator_staff_name',
              title:
                '\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430',
              value:
                '\u0421\u0431\u043e\u0440\u0449\u0438\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432',
              read_only: true,
              view_type: 'text',
            },
            {
              key: 'initiator_org_unit_name',
              title:
                '\u041f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435',
              value:
                '23000 \u041f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0430 / \u041e\u0431\u044a\u0435\u043a\u0442 \u0440\u043e\u0437\u043d\u0438\u0446\u044b / \u041a\u043b\u0430\u0441\u0442\u0435\u0440 \u041c\u043e\u0441\u043a\u0432\u0430 20 / \u041a\u043b\u0430\u0441\u0442\u0435\u0440\u044b / \u0414\u0438\u0432\u0438\u0437\u0438\u043e\u043d \u041c\u043e\u0441\u043a\u0432\u0430 \u041c\u043e\u0441\u043a\u0432\u0430-\u0417\u0430\u043f\u0430\u0434 / \u0414\u0438\u0432\u0438\u0437\u0438\u043e\u043d\u044b / \u041c\u0430\u043a\u0440\u043e\u0440\u0435\u0433\u0438\u043e\u043d \u041c\u043e\u0441\u043a\u0432\u0430 / \u041c\u0430\u043a\u0440\u043e\u0440\u0435\u0433\u0438\u043e\u043d\u044b / \u0422\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044f \u0426\u0435\u043d\u0442\u0440 / \u0422\u043e\u0440\u0433\u043e\u0432\u0430\u044f \u0441\u0435\u0442\u044c \u041f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0430',
              read_only: true,
              view_type: 'text',
            },
            {
              key: 'initiator_bend',
              title:
                '\u0411\u044d\u043d\u0434 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430',
              value: 'LM',
              read_only: true,
              view_type: 'text',
            },
            {
              key: 'initiator_car_make',
              title:
                '\u041c\u0430\u0440\u043a\u0430 \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430',
              value: '\u0422\u043e\u0439\u043e\u0442\u0430',
              read_only: true,
              view_type: 'text',
            },
            {
              key: 'initiator_car_model',
              title:
                '\u041c\u043e\u0434\u0435\u043b\u044c \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430',
              value: 'Rav4',
              read_only: true,
              view_type: 'text',
            },
            {
              key: 'fuel_cards_type',
              title:
                '\u0422\u0438\u043f \u0442\u043e\u043f\u043b\u0438\u0432\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b',
              value:
                '\u041f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u0430\u044f',
              read_only: true,
              view_type: 'text',
            },
            {
              key: 'address',
              title:
                '\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u043e\u0439 \u0442\u043e\u043f\u043b\u0438\u0432\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b',
              value:
                '\u0433 \u041c\u043e\u0441\u043a\u0432\u0430, \u0440-\u043d \u0418\u0437\u043c\u0430\u0439\u043b\u043e\u0432\u043e, \u0443\u043b 10-\u044f \u041f\u0430\u0440\u043a\u043e\u0432\u0430\u044f',
              read_only: true,
              view_type: 'text',
            },
            {
              key: 'fuel_company',
              title:
                '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u043f\u043b\u0438\u0432\u043d\u043e\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438',
              value: '\u041b\u0443\u043a\u043e\u0439\u043b',
              read_only: false,
              view_type: 'formReadOnlyText',
            },
            {
              key: 'fuel_type',
              title:
                '\u0422\u0438\u043f \u0442\u043e\u043f\u043b\u0438\u0432\u0430',
              value: '\u0410\u0418-95',
              read_only: false,
              view_type: 'formReadOnlyText',
            },
            {
              key: 'limit_bend',
  
              title:
                '\u041b\u0438\u043c\u0438\u0442 \u043f\u043e \u0431\u044d\u043d\u0434\u0443, \u043b\u0438\u0442\u0440\u044b',
              value: 100,
              read_only: false,
              view_type: 'formReadOnlyText',
              type: 'number',
            },
            {
              key: 'requested_limit',
              title:
                '\u0417\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u044b\u0439 \u043b\u0438\u043c\u0438\u0442, \u043b\u0438\u0442\u0440\u044b',
              value: 100,
              read_only: false,
              view_type: 'formReadOnlyText',
              type: 'number',
            },
            {
              key: 'temporary_limit',
              title:
                '\u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043b\u0438\u043c\u0438\u0442, \u043b\u0438\u0442\u0440\u044b',
              value: 100,
              read_only: false,
              view_type: 'number',
              fieldType: 'number',
            },
            {
              key: 'temporary_limit_start_date',
              title:
                '\u041d\u0430\u0447\u0430\u043b\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0438\u043e\u0434\u0430',
              value: '',
              read_only: false,
              view_type: 'date',
            },
            {
              key: 'temporary_limit_end_date',
              title:
                '\u041e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0438\u043e\u0434\u0430',
              value: '',
              read_only: false,
              view_type: 'date',
            },
            {
              key: 'initiator_mvz',
              title:
                '\u041c\u0412\u0417 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430',
              value: '13CT35U7',
              read_only: false,
              view_type: 'text',
            },
            {
              key: 'commentary',
              title:
                '\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u043e\u0440\u0430',
              value: null,
              read_only: true,
              view_type: 'text',
            },
          ],
          modals: [
            {
              title:
                '\u041e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u0435 \u043f\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u0438\u044e \u0432\u044b\u0434\u0430\u0447\u0438 \u0442\u043e\u043f\u043b\u0438\u0432\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b',
              action_id: 'correct',
              description:
                '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u044f \u0432\u044b\u0434\u0430\u0447\u0438 \u0442\u043e\u043f\u043b\u0438\u0432\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b.',
            },
            {
              title:
                '\u0423\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u0435 \u043f\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u0438\u044e \u0432\u044b\u0434\u0430\u0447\u0438 \u0442\u043e\u043f\u043b\u0438\u0432\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b',
              action_id: 'specify',
              description:
                '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u044f \u043f\u043e \u0432\u044b\u0434\u0430\u0447\u0435 \u0442\u043e\u043f\u043b\u0438\u0432\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b.',
            },
          ],
          application_id: 'd7dd69a5-6968-40ee-85ef-be5a08dcaaa5',
        },
      },
      extra: {},
      status_type: 'NEW',
      original_id: '33690d5b-5c18-4594-8574-47033158e05c',
      employee_number: null,
      id: 231690,
      process_type: 'UNIREQ',
      metadata: {
        status_marker: 'color-11',
        actions: [],
        external_url: null,
        detail_route: null,
        detail: {
          default_tab: null,
          actions: [
            {
              title:
                '\u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c',
              url: '/api/v2/process/d7dd69a5-6968-40ee-85ef-be5a08dcaaa5/send_message?message=agreement_initiator_manager-d7dd69a5-6968-40ee-85ef-be5a08dcaaa5&action=completed',
              on_success: null,
              data: {
                id: 'done',
                fields: [
                  'temporary_limit',
                  'temporary_limit_start_date',
                  'temporary_limit_end_date',
                  'initiator_mvz',
                ],
                isModal: false,
                position: 'left',
              },
              on_failure: null,
              method: 'POST',
              kind: 'primary',
            },
            {
              title:
                '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u0435',
              url: '/api/v2/process/d7dd69a5-6968-40ee-85ef-be5a08dcaaa5/send_message?message=specified_initiator_manager-d7dd69a5-6968-40ee-85ef-be5a08dcaaa5&action=specified',
              on_success: null,
              data: {
                id: 'specify',
                fields: [],
                isModal: true,
                position: 'left',
              },
              on_failure: null,
              method: 'POST',
              kind: 'secondary',
            },
            {
              title: '\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c',
              url: '/api/v2/process/d7dd69a5-6968-40ee-85ef-be5a08dcaaa5/send_message?message=canceled_initiator_manager-d7dd69a5-6968-40ee-85ef-be5a08dcaaa5&action=canceled',
              on_success: null,
              data: {
                id: 'correct',
                fields: [],
                isModal: true,
                position: 'left',
              },
              on_failure: null,
              method: 'POST',
              kind: 'secondary',
            },
          ],
          tabs: [],
        },
        is_clickable: true,
        is_collapsible: false,
        is_new: true,
        labels: [],
        api_url: null,
      },
      postulation_id: null,
      process_subtype: 'ISSUE_FUEL_CARDS',
      object:
        '\u041c\u0438\u0440\u0437\u043e\u0435\u0432 \u0411\u0435\u0445\u0440\u0443\u0437 \u0421\u0438\u0434\u0436\u043e\u0438\u0434\u0434\u0438\u043d\u043e\u0432\u0438\u0447',
    },
  };
  