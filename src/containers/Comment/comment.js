import React, { useState, useEffect } from "react";
import "./comment-responsive.css";
import "./comment.css";
import { FaUserAlt } from "react-icons/fa";

import { BiLike, BiDislike } from "react-icons/bi";

import { BsCheckCircleFill } from "react-icons/bs";

import { IoMdAlert } from "react-icons/io";

import { Rating } from "@mui/material";

const comments = [
  {
    id: "1",
    comment_title: "Món ăn ngon",
    comment_content: "Ngon lắm. Các bạn cũng thử trải nghiệm nhé!",
    comment_name: "Nguyễn Văn A",
    comment_rate: "5",
    comment_email: "123@gmail.com",
    comment_date: "28",
    comment_month: "3",
    comment_year: "2023",
    comment_hour: "23",
    comment_minute: "15",
    comment_second: "24",
  },
  {
    id: "2",
    comment_title: "Món ăn ngon",
    comment_content: "Ngon lắm. Các bạn cũng thử trải nghiệm nhé!",
    comment_name: "Nguyễn Văn A",
    comment_rate: "5",
    comment_email: "123@gmail.com",
    comment_date: "28",
    comment_month: "3",
    comment_year: "2023",
    comment_hour: "23",
    comment_minute: "15",
    comment_second: "24",
  },
  {
    id: "3",
    comment_title: "Món ăn ngon",
    comment_content: "Ngon lắm. Các bạn cũng thử trải nghiệm nhé!",
    comment_name: "Nguyễn Văn A",
    comment_rate: "5",
    comment_email: "123@gmail.com",
    comment_date: "28",
    comment_month: "3",
    comment_year: "2023",
    comment_hour: "23",
    comment_minute: "15",
    comment_second: "24",
  },
  {
    id: "4",
    comment_title: "Món ăn ngon",
    comment_content: "Ngon lắm. Các bạn cũng thử trải nghiệm nhé!",
    comment_name: "Nguyễn Văn A",
    comment_rate: "5",
    comment_email: "123@gmail.com",
    comment_date: "28",
    comment_month: "3",
    comment_year: "2023",
    comment_hour: "23",
    comment_minute: "15",
    comment_second: "24",
  },
  {
    id: "5",
    comment_title: "Món ăn ngon",
    comment_content: "Ngon lắm. Các bạn cũng thử trải nghiệm nhé!",
    comment_name: "Nguyễn Văn A",
    comment_rate: "5",
    comment_email: "123@gmail.com",
    comment_date: "28",
    comment_month: "3",
    comment_year: "2023",
    comment_hour: "23",
    comment_minute: "15",
    comment_second: "24",
  },
];

function Comment() {
  // Hide ("0"), Show ("1"), Notification ("2")
  const [statusForm, setStatusForm] = useState("0");

  const handleHideForm = () => {
    setStatusForm("0");
  };

  const handleShowForm = () => {
    setStatusForm("1");
  };

  const handleShowNotification = () => {
    setStatusForm("2");
  };

  return (
    <div className="comment">
      <CommentGeneral
        _statusForm={statusForm}
        _handleShowForm={handleShowForm}
        _handleHideForm={handleHideForm}
      />
      {/* Truyền hàm thay đổi trạng thái vào hàm CommentGeneral (bắt sự kiện nhấn nút "Tạo") */}

      {statusForm === "0" && null}
      {statusForm === "1" && (
        <CommentForm
          _statusForm={statusForm}
          _handleHideForm={handleHideForm}
          _handleShowNotification={handleShowNotification}
        />
      )}
      {statusForm === "2" && <CommentNotification />}

      {/* Nếu showForm == true thì gọi hàm CommentForm (Mở Form) */}
      {/* Truyền hàm thay đổi trạng thái vào hàm CommentGeneral (bắt sự kiện nhấn nút "Đóng")*/}

      <CommentSort />
      <CommentList />
    </div>
  );
}

function CommentGeneral({ _statusForm, _handleShowForm, _handleHideForm }) {
  const handleBtn = () => {
    if (_statusForm == "1") {
      _handleHideForm();
    } else if (_statusForm == "0") {
      _handleShowForm();
    } else if (_statusForm == "2") {
      window.location.reload();
    }
  };

  return (
    <div class="comment-general">
      <h2 class="comment-general-header comment-general-header-mobile">
        {" "}
        Đánh giá của khách hàng{" "}
      </h2>

      <div class="comment-general-wrap comment-general-wrap-mobile">
        <div class="general-item-summary">
          <div class="general-item-summary-star">
            <Rating name="read-only" value={5} readOnly size="large" />
          </div>
          <div class="general-item-summary-average">4.86 / 5</div>
          <div class="general-item-summary-total">
            Trên tổng số 300 lượt đánh giá
          </div>
        </div>

        <div class="general-item-detail general-item-detail-mobile">
          <div class="general-item-detail-row">
            <Rating name="read-only" value={5} readOnly />
            <div class="detail-row-frequency"> 250 </div>
          </div>
          <div class="general-item-detail-row">
            <Rating name="read-only" value={4} readOnly />
            <div class="detail-row-frequency"> 28 </div>
          </div>
          <div class="general-item-detail-row">
            <Rating name="read-only" value={3} readOnly />
            <div class="detail-row-frequency"> 22 </div>
          </div>
          <div class="general-item-detail-row">
            <Rating name="read-only" value={2} readOnly />
            <div class="detail-row-frequency"> 0 </div>
          </div>
          <div class="general-item-detail-row">
            <Rating name="read-only" value={1} readOnly />
            <div class="detail-row-frequency"> 0 </div>
          </div>
        </div>

        {_statusForm === "0" && (
          <div class="general-send general-send-mobile">
            <div
              class="general-send-btn general-send-btn-mobile"
              id="comment-btn-open"
              onClick={handleBtn} // showForm là hàm xử lý bật / tắt
            >
              {" "}
              Đánh giá ngay!{" "}
            </div>
          </div>
        )}
        {_statusForm === "1" && (
          <div class="general-send general-send-mobile">
            <div
              class="general-send-btn general-send-btn-mobile"
              id="comment-btn-open"
              onClick={handleBtn} // showForm là hàm xử lý bật / tắt
            >
              {" "}
              Đóng{" "}
            </div>
          </div>
        )}
        {_statusForm === "2" && (
          <div class="general-send general-send-mobile">
            <div
              class="general-send-btn general-send-btn-mobile"
              id="comment-btn-open"
              onClick={handleBtn} // showForm là hàm xử lý bật / tắt
            >
              {" "}
              Làm mới trang!{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CommentSort() {
  return (
    <div class="comment-sort">
      <p class="comment-sort-header"> Đánh giá </p>
      <div class="comment-sort-wrap">
        <select class="comment-sort-dropdown">
          <option id="option-recent" value="Gần đây nhất">
            Gần đây nhất
          </option>
          <option id="best-rate" value="Xếp hạng cao nhất">
            Xếp hạng cao nhất
          </option>
          <option id="option-useful" value="Hữu ích nhất">
            Hữu ích nhất
          </option>
          <option id="option-old" value="Cũ nhất">
            Cũ nhất
          </option>
          <option id="bad-rate" value="Xếp hạng thấp nhất">
            Xếp hạng thấp nhất
          </option>
        </select>
      </div>
    </div>
  );
}

function CommentNotification() {
  return (
    <div class="comment-notification">
      <div class="comment-notification-container">
        <div class="notification-image">
          <BsCheckCircleFill style={{ color: "#133B3D", fontSize: "50px" }} />
        </div>

        <div class="notification-header">Đánh giá đã được ghi nhận!</div>

        <div class="notification-content">
          Bạn có thể làm mới trang trong giây lát để xem đánh giá của bạn. Cảm
          ơn bạn đã ủng hộ sản phẩm và đánh giá!
        </div>
      </div>
    </div>
  );
}

function CommentForm({
  _statusForm,
  _handleHideForm,
  _handleShowNotification,
}) {
  const [inputs, setInputs] = useState({});

  const [commentRate, setCommentRate] = useState(5);
  const [commentTitle, setCommentTitle] = useState();
  const [commentContent, setCommentContent] = useState();
  const [commentName, setCommentName] = useState();
  const [commentEmail, setCommentEmail] = useState();

  const [checkFill, setCheckFill] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  // {} khởi tạo 1 đối tượng

  const handleInputChange = (event) => {
    const name = event.target.name; // Lấy giá trị name của sự kiện (name của phần tử input bị thay đổi giá trị)
    const value = event.target.value; // Lấy giá trị value của sự kiện (value của phần tử input bị thay đổi giá trị, tức là giá trị nhập trong phần tử)
    console.log(name, value);
    if (name == "comment_title") {
      setCommentTitle(value);
    } else if (name == "comment_content") {
      setCommentContent(value);
    } else if (name == "comment_name") {
      setCommentName(value);
    } else if (name == "comment_email") {
      setCommentEmail(value);
    }
    // [name]: value -> cập nhật giá trị "value" của thuộc tính "name" trong inputs
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleInputSubmit = (event) => {
    // Thêm "comment_rate": "5" vào inputs để gửi đi
    if (typeof inputs.comment_rate === "undefined") {
      setInputs((prev) => {
        return {
          ...prev,
          ["comment_rate"]: "5",
        };
      });
    }
    // Thêm "comment_name": "Ẩn danh" vào inputs để gửi đi
    if (typeof inputs.comment_name === "undefined") {
      setInputs((prev) => {
        return {
          ...prev,
          ["comment_name"]: "Ẩn danh",
        };
      });
    }

    var today = new Date();
    // Thêm "comment_date", "comment_time" vào inputs để gửi đi
    setInputs((prev) => {
      return {
        ...prev,
        ["comment_date"]: today.getDate(),
        ["comment_month"]: today.getMonth(),
        ["comment_year"]: today.getFullYear(),
        ["comment_hour"]: today.getHours(),
        ["comment_minute"]: today.getMinutes(),
        ["comment_second"]: today.getSeconds(),
      };
    });

    event.preventDefault();
    console.log(inputs);
  };

  const handleSubmitBtn = () => {
    _handleShowNotification();
  };

  const handleCloseBtn = () => {
    _handleHideForm();
  };

  const handleUnFill = () => {
    if (commentName == null || commentContent == null || commentEmail == null) {
      setCheckFill(true);
    } else {
      setCheckFill(false);
    }
  };

  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const handleCheckEmail = () => {
    if (!isEmail(commentEmail)) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };

  return (
    <div class="comment-form">
      <div class="comment-form-container">
        <h2 class="comment-form-header comment-form-header-mobile">
          {" "}
          Đánh giá của bạn{" "}
        </h2>

        <div class="comment-form-field">
          <label class="comment-form-label"> Xếp hạng </label>
          <Rating
            name="comment_rate"
            value={commentRate}
            onChange={(event, newValue) => {
              setCommentRate(newValue);
              handleInputChange(event);
            }}
          />
        </div>

        <div class="comment-form-field">
          <label for="comment-title" class="comment-form-label">
            {" "}
            Tiêu đề{" "}
          </label>
          <input
            type="text"
            class="comment-form-input"
            id="comment-title"
            placeholder="Tiêu đề đánh giá của bạn"
            name="comment_title"
            onChange={(event) => {
              handleInputChange(event);
            }}
          ></input>
        </div>

        <div class="comment-form-field">
          <label for="comment-content" class="comment-form-label">
            {" "}
            Nội dung đánh giá{" "}
          </label>
          <textarea
            class="comment-form-input"
            id="comment-content"
            placeholder="Viết bình luận của bạn tại đây"
            style={{ fontFamily: "inherit" }}
            required
            rows={8}
            name="comment_content"
            onChange={(event) => {
              handleInputChange(event);
            }}
          ></textarea>
        </div>

        {(commentContent === "" ||
          (commentContent == null && checkFill == true)) && (
          <div class="comment-checkfill">
            {" "}
            <IoMdAlert className="comment-checkfill-icon" /> Trường này là bắt
            buộc!{" "}
          </div>
        )}

        <div class="comment-form-field">
          <label for="comment-name" class="comment-form-label">
            {" "}
            Tên (Công khai){" "}
          </label>
          <input
            type="text"
            class="comment-form-input"
            id="comment-name"
            placeholder="Nhập tên (hiển thị công khai)"
            name="comment_name"
            onChange={handleInputChange}
          ></input>
        </div>

        {(commentName === "" || (commentName == null && checkFill == true)) && (
          <div class="comment-checkfill">
            {" "}
            <IoMdAlert className="comment-checkfill-icon" /> Trường này là bắt
            buộc!{" "}
          </div>
        )}

        <div class="comment-form-field">
          <label for="comment-email" class="comment-form-label">
            {" "}
            Email{" "}
          </label>
          <input
            type="email"
            class="comment-form-input"
            id="comment-email"
            placeholder="Nhập email (không hiển thị công khai)"
            name="comment_email"
            onChange={(event) => {
              handleInputChange(event);
              handleCheckEmail();
            }}
          ></input>
        </div>

        {(commentEmail === "" ||
          (commentEmail == null && checkFill == true)) && (
          <div class="comment-checkfill">
            {" "}
            <IoMdAlert className="comment-checkfill-icon" /> Trường này là bắt
            buộc!{" "}
          </div>
        )}
        {commentEmail != null && commentEmail != "" && checkEmail == true && (
          <div class="comment-checkfill">
            {" "}
            <IoMdAlert className="comment-checkfill-icon" /> Email không hợp lệ.
            Vui lòng nhập theo định dạng example@xyz.com{" "}
          </div>
        )}

        <div class="comment-form-btns">
          <div
            class="comment-form-btn"
            id="comment-btn-submit"
            onClick={(event) => {
              handleUnFill();
              handleCheckEmail();
              if (
                checkEmail == false &&
                checkFill == false &&
                commentName != null &&
                commentEmail != null &&
                commentContent != null &&
                commentName != "" &&
                commentEmail != "" &&
                commentContent != ""
              ) {
                // handleSubmitBtn();
                handleInputSubmit(event);
              }
            }}
          >
            Gửi đánh giá
          </div>
          <div
            class="comment-form-btn"
            id="comment-btn-cancel"
            onClick={handleCloseBtn}
          >
            Đóng
          </div>
        </div>
      </div>
    </div>
  );
}

function CommentList() {
  console.log(comments);

  return (
    <div class="comment-list">
      {comments.map((item) => {
        return (
          <div class="comment-list-container">
            <div class="comment-item">
              <div class="comment-item-header">
                <div class="header-image">
                  <FaUserAlt style={{ color: "#133B3D" }} />
                </div>

                <div class="header-info">
                  <div class="header-author">{item.comment_name}</div>

                  <div class="header-time">
                    {item.comment_date}/{item.comment_month}/{item.comment_year}
                    , {item.comment_hour}:{item.comment_minute}
                  </div>
                </div>
              </div>

              <div class="comment-item-content">
                <h3> {item.comment_title} </h3>
                <p> {item.comment_content} </p>
              </div>

              <div class="comment-item-judge">
                <div class="j-text"> Xếp hạng: </div>
                <Rating
                  name="read-only"
                  value={Number(item.comment_rate)}
                  readOnly
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;

export default Comment;