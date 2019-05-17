import $ from 'jquery';

class Interface {
  /**
   * [getOmit 获取遗漏数据];
   * @param {string} issue [返回期数]
   * @return {[type]}
   */
  getOmit(issue, ) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/omit',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          self.setOmit(res.data);
          resolve.call(self, res);
        },
        error: function (err) {
          reject.call(err);
        }
      })
    });
  }

  /**
   * [getOpenCode 获取开奖号码];
   * @param {string} issue [期号码]
   * @return {[type]}
   */
  getOpenCode(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/openCode',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          self.setOpenCode(res.data);
          resolve.call(self, res);
        },
        error: function (err) {
          reject.call(err);
        }
      })
    });
  }

  /**
   * [getState 获取开奖号码];
   * @param {string} issue [当期号码]
   * @return {[type]}
   */
  getState(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/state',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          resolve.call(self, res);
        },
        error: function (err) {
          reject.call(err);
        }
      })
    });
  }
}

export default Interface;
