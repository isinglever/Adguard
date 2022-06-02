var obj = {
  "errcode" : "0",
  "data" : {
    "code_data" : {
      "place_address" : "天润路电子科大清水河校区-西校门",
      "place_child_type_name" : "校园",
      "county_name" : "郫都区",
      "place_type_name" : "社会服务和管理机构",
      "place_name" : "电子科技大学（清水河校区）",
      "province_name" : "四川省",
      "city_name" : "成都市"
    },
    "health_info" : {
      "cid_type" : "10",
      "rule_number" : "",
      "is_visited_overseas" : "0",
      "is_isolation" : "0",
      "living_address" : {
        "address" : "",
        "city" : "",
        "county_code" : "1",
        "county" : "",
        "city_code" : "",
        "province_code" : "",
        "province" : ""
      },
      "report_valid_date" : "2022-07-02 17:28:28",
      "name" : "",
      "report_date" : "2021-01-30 09:52:12",
      "is_reported_in_24hours" : false,
      "report_valid_date_gettime" : 1656754108640,
      "gender" : "01",
      "current_status" : "04",
      "guide" : "",
      "other_symptom" : "",
      "phone" : "",
      "high_risk_area" : [

      ],
      "cid" : "**************",
      "reason" : "",
      "report_expired" : false,
      "is_contacted" : "0",
      "risk_assessment_grade" : "00",
      "housing_type" : "01",
      "current_symptom" : "01"
    }
  },
  "requestId" : "5c53ed05-e256-11ec-a675-52540069f4e6",
  "errmsg" : "SUCCESS"
};

$done({body: JSON.stringify(obj)});
