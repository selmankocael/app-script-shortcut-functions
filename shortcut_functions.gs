var sp = SpreadsheetApp.getActiveSpreadsheet()


function page(pageName){
  return sp.getSheetByName(pageName)
}


function getConfig(rng){
  let data =  page("_config").getRange(rng).getValues();

  let config = {} 

  for (d in data){
    config[data[d][0]]=data[d][1]
  }

  return config
}

function getColAsRow(rng){
  let col_data = page("_config").getRange(rng).getValues()

  let data = []

  for (d in col_data){
    data.push(col_data[d])
  }
  return [data]
}


function addDataToPage(data, pageName){
  let satir = page(pageName).getLastRow()+1;
  page(pageName).getRange(satir,1,1,data[0].length).setValues(data)
}


function showMassage(message){
  SpreadsheetApp.getUi().alert(mesaj)
}
