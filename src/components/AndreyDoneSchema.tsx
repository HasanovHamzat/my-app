export const  generateDependencies =  (inputData) => {
  const dependencies = {};
console.log(111111)
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
              default: childItem.value
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
console.log("main")
  return dependencies;
}