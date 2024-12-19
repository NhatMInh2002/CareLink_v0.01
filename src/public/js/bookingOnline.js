//Tạo và chèn script Messenger Extensions SDK vào trang web.
//SDK này cung cấp các chức năng đặc biệt như lấy ngữ cảnh từ cuộc trò chuyện trên Messenger và đóng Webview khi cần
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "Messenger");

window.extAsyncInit = function () {
  // Dùng để lấy thông tin ngữ cảnh của người dùng trong Messenger, cụ thể là PSID (Page Scoped ID), một mã định danh duy nhất cho mỗi người dùng trên mỗi trang Facebook.
  MessengerExtensions.getContext(
    "752170935271841",
    function success(thread_context) {
      // success
      //set psid to input
      $("#psid").val(thread_context.psid);
      handleClickButtonBooking();
    },
    function error(err) {
      // error
      console.log(err);
    }
  );
};

// Xác thực nhập dữ liệu
// Kiểm tra số điện thoại bằng regex (PHONE_REG) để đảm bảo định dạng hợp lệ cho số điện thoại ở Việt Nam (bao gồm mã vùng +84 hoặc 0).
// Kiểm tra trường reason (lý do) không được để trống.
// Nếu có lỗi, thêm class is-invalid để thông báo lỗi cho người dùng.
function validateInputFields() {
  const PHONE_REG =
    /((0[2|3|4|5|6|7|8|9]|01[2|6|8|9])+([0-9]{8})|(84[2|3|4|5|6|7|8|9]|841[2|6|8|9])+([0-9]{8}))\b/g;

  let reason = $("#reason");
  let phone = $("#phone");

  if (!phone.val().match(PHONE_REG)) {
    phone.addClass("is-invalid");
    return true;
  } else {
    phone.removeClass("is-invalid");
  }

  if (reason.val() === "") {
    reason.addClass("is-invalid");
    return true;
  } else {
    reason.removeClass("is-invalid");
  }

  return false;
}

function handleClickButtonBooking() {
  $("#btnBooking").on("click", function (e) {
    // Gọi hàm validateInputFields() để kiểm tra dữ liệu người dùng. Nếu hợp lệ thì tiếp tục xử lý, ngược lại, dừng tiến trình.
    let check = validateInputFields();
    // Lấy thông tin từ các trường nhập của người dùng (psid, customerName, phone, reason).
    let data = {
      psid: $("#psid").val(),
      customerName: $("#customerName").val(),
      phone: $("#phone").val(),
      reason: $("#reason").val(),
    };

    if (!check) {
      //close webview
      MessengerExtensions.requestCloseBrowser(
        function success() {
          // webview closed
        },
        function error(err) {
          // an error occurred
          console.log(err);
        }
      );

      //send data to node.js server
      $.ajax({
        url: `${window.location.origin}/set-info-booking-online-messenger`,
        method: "POST",
        data: data,
        success: function (data) {
          console.log(data);
        },
        error: function (error) {
          console.log(error);
        },
      });
    }
  });
}
