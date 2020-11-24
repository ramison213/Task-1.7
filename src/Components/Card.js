import React, { Component } from 'react';

export default class Card extends Component {
  render(props) {
    return (
      <div className="card">
        <div className="row">
          <div className="col col-4">
            <div className="card-img-wrap">
              <img className="card-img-top" src={ this.props.user.imgUrl } alt="Card image cap"></img>
            </div>
          </div>

          <div className="col col-8">
            <div className="card-header px-3">Кабинет пользователя</div>
            <div className="card-body px-3 mb-2">
              <div className="card-header px-0 py-0 mb-1 d-flex align-items-center size-16">
                <i className="mdi mdi-account-outline size-24 mr-2"></i>
                Личные данные
              </div>

              <div className="card-text pl-5 d-flex flex-column">
                <span className="size-13 text-light my-1">Имя</span>
                <span>{ this.props.user.firstName }</span>
              </div>

              <div className="card-text pl-5 d-flex flex-column">
                <span className="size-13 text-light my-1">Фамилия</span>
                <span>{ this.props.user.secondName }</span>
              </div>

              <div className="card-text pl-5 d-flex flex-column">
                <span className="size-13 text-light my-1">День рождения</span>
                <span>{ this.props.user.born }</span>
              </div>
            </div>

            <div className="card-body px-3 mb-2">
              <div className="card-header px-0 py-0 mb-1 d-flex align-items-center size-16">
                <i className="mdi mdi-card-account-phone-outline size-24 mr-2"></i>
                Контакты
              </div>

              <div className="card-text pl-5 d-flex flex-column">
                <span className="size-13 text-light my-1">Телефон</span>
                <span>{ this.props.user.tel }</span>
              </div>

              <div className="card-text pl-5 d-flex flex-column">
                <span className="size-13 text-light my-1">Почта</span>
                <span>{ this.props.user.email }</span>
              </div>
            </div>
            <div className="card-body px-3">
              <div className="card-header px-0 py-0 mb-1 d-flex align-items-center size-16">
                <i className="mdi mdi-truck-delivery-outline size-24 mr-2"></i>
                Адрес доставки
              </div>

              <div className="card-text pl-5 d-flex flex-column">
                <span className="size-13 text-light my-1">Город</span>
                <span>{ this.props.user.address }</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
