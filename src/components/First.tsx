import jsonSchemaGenerator from 'json-schema-generator';
type ViewType = "formReadOnlyText" | "toDisplaySelectionPlu" | "rating" | "number" | "file" | "boolean" | "title" | "files" | "employee_list" | "date" | "text" | "string";

type WidgetType = "masked" | "calculation" | "extraFields" | "select" | "radio" | "boolean" | "date" | "rating" | "file"  |"toDisplaySelectionPlu" | "toDisplayPlu" | "toDisplayKits" | "toDisplaySelectionKits" | "dadata" |
"number" | "formTitle" | "formReadOnlyText";
type TypeViewMapper = Record<ViewType, string>;
type WidgetTypeMapper = Record<WidgetType, string>;

export const First = () => {

const typeViewMapper: TypeViewMapper = {
  formReadOnlyText: "string",
  toDisplaySelectionPlu: "array",
  rating: "number",
  number: "number",
  file: "array",
  boolean: "boolean",
  title: "title",
  files: "files",
  employee_list: "employee_list",
  date: "string",
  text: "string",
  string: "string"
}

const widgetTypeMapper: WidgetTypeMapper = {
    masked: "masked",
    calculation: "calculation",
    extraFields: "extraFields",
    select: "select",
    radio: "radio",
    boolean: "checkbox",
    date: "date",
    rating: "rating",
    file: "OpenTextUpload",
    toDisplaySelectionPlu: "toDisplaySelectionPlu",
    toDisplayPlu: "toDisplayPlu",
    toDisplayKits: "toDisplayKits",
    toDisplaySelectionKits: "toDisplaySelectionKits",
    dadata: "dadata",
    number: "TextWidget",
    formTitle: "formTitle",
    formReadOnlyText: "formReadOnlyText",
}
const newWidgetType = "file"
const currentWidgetType = widgetTypeMapper[newWidgetType];
console.log({currentWidgetType})

const fields = [
    {
      key: 'initiator_fullname',
      title: 'ФИО сотрудника',
      value: 'Мирзоев Бехруз Сиджоиддинович',
      read_only: true,
      view_type: "text",

    },
    {
      key: 'initiator_tn',
      title: 'Табельный номер сотрудника',
      value: '02136459',
      read_only: true,
      view_type: "text",

    },
    {
      key: 'initiator_phone_number',
      title: 'Номер телефона сотрудника',
      value: '+79999999999',
      read_only: true,
      view_type: "text",

    },
    {
      key: 'initiator_staff_name',
      title: 'Должность сотрудника',
      value: 'Сборщик заказов',
      read_only: true,
      view_type: "text",

    },
    {
      key: 'initiator_org_unit_name',
      title: 'Подразделение',
      value:
        '23000 Пятерочка / Объект розницы / Кластер Москва 20 / Кластеры / Дивизион Москва Москва-Запад / Дивизионы / Макрорегион Москва / Макрорегионы / Территория Центр / Торговая сеть Пятерочка',
      read_only: true,
      view_type: "text",

    },
    {
      key: 'initiator_bend',
      title: 'Бэнд сотрудника',
      value: 'LM',
      read_only: true,
      view_type: "text",

    },
    {
      key: 'initiator_car_make',
      title: 'Марка личного автомобиля сотрудника',
      value: 'Тойота',
      read_only: true,
      view_type: "text",

    },
    {
      key: 'initiator_car_model',
      title: 'Модель личного автомобиля сотрудника',
      value: 'Rav4',
      read_only: true,
      view_type: "text",

    },
    {
      key: 'fuel_cards_type',
      title: 'Тип топливной карты',
      value: 'Пластиковая',
      read_only: true,
      view_type: "text",
    },
    {
      key: 'address',
      title: 'Адрес доставки пластиковой топливной карты',
      value: 'г Москва, р-н Измайлово, ул 10-я Парковая',
      read_only: true,
      view_type: "text",
    },
    {
      key: 'fuel_company',
      title: 'Наименование топливной компании',
      value: 'Лукойл',
      read_only: false,
      view_type: "formReadOnlyText",
    },
    {
      key: 'fuel_type',
      title: 'Тип топлива',
      value: 'АИ-95',
      read_only: false,
      view_type: "formReadOnlyText",
    },
    {
      key: 'limit_bend',
      title: 'Лимит по бэнду, литры',
      value: 100,
      read_only: false,
      view_type: "formReadOnlyText",
      type: 'number',
    },
    {
      key: 'requested_limit',
      title: 'Запрошенный лимит, литры',
      value: 100,
      read_only: false,
      view_type: "formReadOnlyText",
      type: 'number',
    },
    {
      key: 'temporary_limit',
      title: 'Согласованный лимит, литры',
      value: 100,
      read_only: false,
      view_type: "number",
      fieldType: 'number',
    },
    {
      key: 'temporary_limit_start_date',
      title: 'Начало временного периода',
      value: '',
      read_only: false,
      view_type: "date",
    },
    {
      key: 'temporary_limit_end_date',
      title: 'Окончание временного периода',
      value: '',
      read_only: false,
      view_type: "date",
    },
    {
      key: 'initiator_mvz',
      title: 'МВЗ сотрудника',
      value: '13CT35U7',
      read_only: false,
      view_type: "text",

    },
    {
      key: 'commentary',
      title: 'Комментарий инициатора',
      value: null,
      read_only: true,
      view_type: "text",
  
    },
  ]
  
  

  interface IField {
      key: string;
      title: string;
      value: string | number | null;
      read_only: boolean;
      view_type: any;
      fieldType?: string;
  }
  const generateSchemaField = (field: IField[]) => {
    const object = field.reduce(
        (obj, {
          key,
          title,
          value,
          view_type,
        }) => Object.assign(obj, { [key]: {
            key,
            title,
            value,
            type: typeViewMapper[view_type as ViewType],
            default: value,
        } }), {
           
        });
        const full = {
          properties: object,
          type: 'object',
        }
        
const jsonObject = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

        const jsonSchema = jsonSchemaGenerator(full);
        console.log({jsonSchema});
        console.log("testTask4_v2", jsonSchemaGenerator(testTask4_v2.data.extra.fields));
        console.log("jsonObject", jsonSchemaGenerator(jsonObject));
        
        console.log({full})
  }
  console.log("<<<", [
    {
      key: 'operator_name',
      title:
        '\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438',
      value: '\u041c\u0435\u0433\u0430\u0424\u043e\u043d',
      choises: [
        '\u041c\u0435\u0433\u0430\u0424\u043e\u043d',
        '\u0411\u0438\u043b\u0430\u0439\u043d',
        '\u041c\u0422\u0421',
      ],
      read_only: false,
      view_type: 'select',
    },
    {
      key: 'sim_type',
      title:
        '\u0422\u0438\u043f \u0441\u0438\u043c-\u043a\u0430\u0440\u0442\u044b',
      value: '\u041d\u043e\u0432\u0430\u044f',
      choises: [
        '\u041d\u043e\u0432\u0430\u044f',
        '\u041f\u0435\u0440\u0435\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0430\u0440\u043e\u0439',
      ],
      read_only: false,
      view_type: 'select',
    },
    {
      key: 'office_name',
      title:
        '\u041c\u0435\u0441\u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u0438\u043c-\u043a\u0430\u0440\u0442\u044b',
      value: '\u0414\u0440\u0443\u0433\u043e\u0435',
      choises: [
        '\u041e\u0444\u0438\u0441 \u041a\u0410\u041b\u0418\u0422\u041d\u0418\u041a\u0418',
        '\u041e\u0444\u0438\u0441 \u041e\u0410\u0417\u0418\u0421/\u0414\u041e\u0411\u0420\u042b\u041d\u0418\u041d\u0421\u041a\u0418\u0419',
        '\u041e\u0444\u0438\u0441 \u0424\u0410\u041a\u0422\u041e\u0420\u0418\u042f',
        '\u0414\u0440\u0443\u0433\u043e\u0435',
      ],
      read_only: false,
      view_type: 'select',
    },
    {
      key: 'address',
      title:
        '\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0441\u0438\u043c-\u043a\u0430\u0440\u0442\u044b',
      value:
        '\u0433 \u041c\u043e\u0441\u043a\u0432\u0430, \u0440-\u043d \u041c\u0430\u0440\u044c\u0438\u043d\u0430 \u0440\u043e\u0449\u0430, \u043f\u0440\u043e\u0435\u0437\u0434 11-\u0439 \u041c\u0430\u0440\u044c\u0438\u043d\u043e\u0439 \u0420\u043e\u0449\u0438',
      read_only: false,
      view_type: 'dadata',
    },
    {
      key: 'apartment',
      title:
        ' \u041d\u043e\u043c\u0435\u0440 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b/\u043a\u043e\u043c\u043d\u0430\u0442\u044b/\u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f',
      value: '1',
      read_only: false,
      view_type: 'text',
    },
    {
      key: 'commentary',
      title:
        '\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u043e\u0440\u0430',
      value: null,
      read_only: false,
      view_type: 'text',
    },
    {
      key: 'sunc_test_display',
      title: 'Test sunc block',
      value: null,
      read_only: false,
      view_type: 'toChangeSelectionPlu',
      changeable: true,
    },
    {
      key: 'sunc_test_change',
      title: 'Test sunc block',
      value: null,
      read_only: false,
      view_type: 'toDisplaySelectionKits',
      changeable: true,
    },
    {
      key: 'test_checkbox',
      title: 'Test checkbox',
      value: false,
      read_only: false,
      view_type: 'boolean',
      requiredForSubmit: true,
    },
    {
      key: 'test_checkbox_2',
      title: 'Test checkbox two',
      value: false,
      read_only: false,
      view_type: 'boolean',
      requiredForSubmit: true,
    },
  ])
  console.log(">>>>",{objectFromAndrey, testTask4_v2}, generateSchemaField(fields))
  
    return (
       <p> Hello</p>
    )
}
const objectFromAndrey = {
  schema: {
    type: 'object',
    title: 'Оформление корпоративной мобильной связи',
    required: ['operator', 'limit', 'sim'],
    properties: {
      limit: {
        type: 'boolean',
        title:
          'Расходы свыше лимита, установленного ВНД, сотрудник оплачивает самостоятельно',
      },
      operator: {
        type: 'object',
        title: 'Оператор мобильной связи',
        properties: {
          name: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
        },
        listOptions: [
          {
            name: 'МегаФон',
            value: 'megaphone',
          },
          {
            name: 'Билайн',
            value: 'beeline',
          },
          {
            name: 'МТС',
            value: 'mts',
          },
        ],
      },
      commentary: {
        type: 'string',
        title: 'Введите комментарий (для примера: сим-карта для планшета)',
      },
      initiator_tn: {
        type: 'string',
        title: 'Инициатор',
      },
      sim: {
        enum: ['Новая', 'Переоформление'],
        type: 'string',
        title: 'Тип сим-карты',
      },
    },
    dependencies: {
      sim: {
        oneOf: [
          {
            required: ['office'],
            properties: {
              sim: {
                enum: ['Новая'],
              },
              office: {
                type: 'object',
                title: 'Место получения сим-карты.',
                properties: {
                  name: {
                    type: 'string',
                  },
                  value: {
                    type: 'string',
                  },
                },
                listOptions: [
                  {
                    name: 'Офис КАЛИТНИКИ',
                    value: 'kalitniki',
                  },
                  {
                    name: 'Офис ОАЗИС/ДОБРЫНИНСКИЙ',
                    value: 'dobrininsky',
                  },
                  {
                    name: 'Офис ФАКТОРИЯ',
                    value: 'factory',
                  },
                  {
                    name: 'Другое',
                    value: 'other',
                  },
                ],
              },
            },
          },
          {
            properties: {
              sim: {
                enum: ['Переоформление'],
              },
            },
          },
        ],
      },
      office: {
        oneOf: [
          {
            properties: {
              office: {
                enum: [
                  {
                    name: 'Офис КАЛИТНИКИ',
                    value: 'kalitniki',
                  },
                ],
              },
            },
          },
          {
            properties: {
              office: {
                enum: [
                  {
                    name: 'Офис ОАЗИС/ДОБРЫНИНСКИЙ',
                    value: 'dobrininsky',
                  },
                ],
              },
            },
          },
          {
            properties: {
              office: {
                enum: [
                  {
                    name: 'Офис ФАКТОРИЯ',
                    value: 'factory',
                  },
                ],
              },
            },
          },
          {
            required: ['address'],
            properties: {
              office: {
                enum: [
                  {
                    name: 'Другое',
                    value: 'other',
                  },
                ],
              },
              address: {
                title:
                  'Выберите из справочника адрес получения новой сим-карты (индекс, область, город, улица, дом, корпус/строение).',
                type: 'string',
              },
            },
          },
        ],
      },
    },
  },
  uiSchema: {
    sim: {},
    limit: {
      'ui:options': {
        required: true,
      },
    },
    address: {
      'ui:widget': '`dadata`',
      'ui:options': {
        count: 15,
        to_bound: 'house',
      },
    },
    operator: {
      'ui:field': 'SelectEnumNameField',
      'ui:placeholder': 'Выберите оператора',
    },
    office: {
      'ui:field': 'SelectEnumNameField',
      'ui:placeholder': 'Выберите место получения сим-карты',
    },
    'ui:order': [
      'info1',
      'info2',
      'operator',
      'sim',
      'office',
      'address',
      'limit',
      '*',
    ],
    commentary: {
      'ui:widget': 'textarea',
    },
    initiator_tn: {
      'ui:user': 'employeeNumber',
      'ui:widget': 'hidden',
    },
  },
  errorMessage: {
    '.limit': {
      required: 'Подтвердите ознакомление с условием.',
    },
  },
  process_schema_id: 'corporate_mobile_communications',
};
const testTask4_v2 = {
  status: 'ok',
  data: {
    client_id: 'lk2_camunda',
    id: 79160,
    process:
      '\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438',
    mode: 'EMPLOYEE',
    process_subtype: 'CORPORATE_MOBILE_COMMUNICATIONS',
    object_type: 'EMPLOYEE',
    process_type: 'UNIREQ',
    deadline: '2023-10-05T20:59:59+00:00',
    metadata: {
      detail_route: null,
      status_marker: 'color-5',
      is_collapsible: false,
      api_url: null,
      labels: [],
      detail: {
        tabs: [],
        default_tab: null,
        actions: [],
      },
      actions: [
        {
          method: 'POST',
          url: '/api/v2/process/fb4446aac-7dfb-49c2-9ea0-0fa71ba7532c/send_message?message=send_clarification_initiator-b4446aac-7dfb-49c2-9ea0-0fa71ba7532c&action=send',
          on_failure: null,
          on_success: null,
          title:
            '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443',
          kind: 'primary',
          data: {
            id: 'send',
            fields: ['sunc_test_display', 'sunc_test_change'],
            isModal: false,
            position: 'left',
          },
        },
        {
          method: 'POST',
          url: '/api/v2/process/fb4446aac-7dfb-49c2-9ea0-0fa71ba7532c/send_message?message=cancelByInitiator-b4446aac-7dfb-49c2-9ea0-0fa71ba7532c&action=canceled',
          on_failure: null,
          on_success: null,
          title:
            '\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443',
          kind: 'secondary',
          data: {
            id: 'cancel',
            fields: [],
            isModal: true,
            position: 'left',
          },
        },
      ],
      is_clickable: true,
      is_new: true,
      external_url: null,
    },
    extra: {
      tabs: [
        {
          key: 'info',
          title: '\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f',
          fields: [
            'operator_name',
            'sim_type',
            'office_name',
            'address',
            'apartment',
            'commentary',
            'test_checkbox',
            'test_checkbox_2',
            'sunc_test_display',
            'sunc_test_change',
          ],
          actions: ['send', 'cancel'],
          isSelected: true,
        },
      ],
      fields: [
        {
          key: 'operator_name',
          title:
            '\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438',
          value: '\u041c\u0435\u0433\u0430\u0424\u043e\u043d',
          choises: [
            '\u041c\u0435\u0433\u0430\u0424\u043e\u043d',
            '\u0411\u0438\u043b\u0430\u0439\u043d',
            '\u041c\u0422\u0421',
          ],
          read_only: false,
          view_type: 'select',
        },
        {
          key: 'sim_type',
          title:
            '\u0422\u0438\u043f \u0441\u0438\u043c-\u043a\u0430\u0440\u0442\u044b',
          value: '\u041d\u043e\u0432\u0430\u044f',
          choises: [
            '\u041d\u043e\u0432\u0430\u044f',
            '\u041f\u0435\u0440\u0435\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0430\u0440\u043e\u0439',
          ],
          read_only: false,
          view_type: 'select',
        },
        {
          key: 'office_name',
          title:
            '\u041c\u0435\u0441\u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u0438\u043c-\u043a\u0430\u0440\u0442\u044b',
          value: '\u0414\u0440\u0443\u0433\u043e\u0435',
          choises: [
            '\u041e\u0444\u0438\u0441 \u041a\u0410\u041b\u0418\u0422\u041d\u0418\u041a\u0418',
            '\u041e\u0444\u0438\u0441 \u041e\u0410\u0417\u0418\u0421/\u0414\u041e\u0411\u0420\u042b\u041d\u0418\u041d\u0421\u041a\u0418\u0419',
            '\u041e\u0444\u0438\u0441 \u0424\u0410\u041a\u0422\u041e\u0420\u0418\u042f',
            '\u0414\u0440\u0443\u0433\u043e\u0435',
          ],
          read_only: false,
          view_type: 'select',
        },
        {
          key: 'address',
          title:
            '\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0441\u0438\u043c-\u043a\u0430\u0440\u0442\u044b',
          value:
            '\u0433 \u041c\u043e\u0441\u043a\u0432\u0430, \u0440-\u043d \u041c\u0430\u0440\u044c\u0438\u043d\u0430 \u0440\u043e\u0449\u0430, \u043f\u0440\u043e\u0435\u0437\u0434 11-\u0439 \u041c\u0430\u0440\u044c\u0438\u043d\u043e\u0439 \u0420\u043e\u0449\u0438',
          read_only: false,
          view_type: 'dadata',
        },
        {
          key: 'apartment',
          title:
            ' \u041d\u043e\u043c\u0435\u0440 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b/\u043a\u043e\u043c\u043d\u0430\u0442\u044b/\u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f',
          value: '1',
          read_only: false,
          view_type: 'text',
        },
        {
          key: 'commentary',
          title:
            '\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u043e\u0440\u0430',
          value: null,
          read_only: false,
          view_type: 'text',
        },
        {
          key: 'sunc_test_display',
          title: 'Test sunc block',
          value: null,
          read_only: false,
          view_type: 'toChangeSelectionPlu',
          changeable: true,
        },
        {
          key: 'sunc_test_change',
          title: 'Test sunc block',
          value: null,
          read_only: false,
          view_type: 'toDisplaySelectionKits',
          changeable: true,
        },
        {
          key: 'test_checkbox',
          title: 'Test checkbox',
          value: false,
          read_only: false,
          view_type: 'boolean',
          requiredForSubmit: true,
        },
        {
          key: 'test_checkbox_2',
          title: 'Test checkbox two',
          value: false,
          read_only: false,
          view_type: 'boolean',
          requiredForSubmit: true,
        },
      ],
      modals: [
        {
          noCommentField: true,
          title:
            '\u041e\u0442\u043c\u0435\u043d\u0430 \u0437\u0430\u044f\u0432\u043a\u0438',
          action_id: 'cancel',
          description:
            '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u043e\u0442\u043c\u0435\u043d\u044b \u0437\u0430\u044f\u0432\u043a\u0438.',
        },
      ],
    },
    employee_number: '00923052',
    created_at: '2023-09-21T14:41:46.315000+00:00',
    initiator_number: '00923052',
    description:
      '\u0417\u0430\u044f\u0432\u043a\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0430 \u043d\u0430 \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u0435 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u043c \u0441 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u043c: "\u043d\u0435\u0442 \u043d\u043e\u043c\u0435\u0440\u0430 \u0434\u043e\u043c\u0430".',
    detail: {
      version: 2,
    },
    status:
      '\u041d\u0430 \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u0438',
    title:
      '\u0417\u0430\u044f\u0432\u043a\u0430 \u043f\u043e \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044e \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438',
    comment: null,
    status_type: 'RETURNED',
    original_id: 'b4446aac-7dfb-49c2-9ea0-0fa71ba7532c',
    object:
      '\u0410\u0440\u0438\u043f\u043e\u0432 \u0420\u0430\u0444\u0430\u044d\u043b\u044c \u041d\u0430\u0437\u0438\u0440\u0431\u043e\u0435\u0432\u0438\u0447',
    updated_at: '2023-09-21T14:42:18.543150+00:00',
    completed_at: null,
  },
};


const myTabFormData = [
 {
      "key": "sim_type",
      "type": "string",
      "title": "Тип сим-карты",
      "enum": [
          "Новая",
          "Переоформление"
      ],
      "chidren_key": "office",
      "chidren_value": "Новая",
      "value": "Новая",
      "read_only": false,
      "view_type": "select",
      "default": "Новая"
  },
  {
      "key": "office",
      "type": "string",
      "title": "Место получения сим-карты.",
      "enum": [
          "Офис КАЛИТНИКИ",
          "Офис ОАЗИС/ДОБРЫНИНСКИЙ",
          "Офис ФАКТОРИЯ",
          "Другое"
      ],
      "chidren_key": "address",
      "chidren_value": "Другое",
      "value": "Другое",
      "read_only": false,
      "view_type": "select",
      "default": "Другое"
  },
   {
      "key": "address",
      "title": "Выберите из справочника адрес получения новой сим-карты (индекс, область, город, улица, дом, корпус/строение).",
      "type": "string",
      "chidren_key": "",
      "chidren_value": "",
      "value": "г Москва, р-н Марьина роща, проезд 11-й Марьиной Рощи",
      "read_only": false,
      "view_type": "dadata",
      "default": "г Москва, р-н Марьина роща, проезд 11-й Марьиной Рощи"
  },
   {
      "key": "operator_name",
      "title": "Укажите вашу сим-карту",
      "enum": [
          "Мегафон",
          "Билайн",
          "Другой"
      ],
      "type": "string",
      "chidren_key": "commentary",
      "chidren_value": "Другой",
      "read_only": false,
      "view_type": "select",
      "value": "МегаФон",
      "default": "МегаФон"
  },
   {
      "key": "commentary",
      "title": "Укажите вашу сим карту",
      "type": "string",
      "chidren_key": "",
      "chidren_value": "",
      "value": null,
      "read_only": false,
      "view_type": "text"
  }
]



export const  generateDependencies =  (inputData) => {
  const dependencies = {};

  inputData.forEach(item => {
    if (item.choises) {
      if (!dependencies[item.key]) {
        dependencies[item.key] = { oneOf: [] };
      }

      item.choises.forEach(enumValue => {
        const dependency = {
          properties: {
            [item.key]: {
              enum: [enumValue]
            }
          }
        };

        if (item.chidren_key && enumValue === item.chidren_value) {
          const childItem = inputData.find(child => child.key === item.chidren_key);
          if (childItem) { 
            dependency.properties[item.chidren_key] = {
              type: childItem.type,
              title: childItem.title,
              value: childItem.value,
              readOnly: childItem.read_only,
              format: childItem.view_type,
              default: childItem.default,
            };
            if (childItem.choises) {
              dependency.properties[item.chidren_key].enum = childItem.choises;
            }
            dependency.required = [item.chidren_key];
          }
        }

        dependencies[item.key].oneOf.push(dependency);
      });
    }
  });

  return dependencies;
}