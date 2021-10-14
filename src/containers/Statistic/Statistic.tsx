import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from "react-redux";

import { AppState } from "../../store";
import { MultiLangContext } from '../../context/MultiLang/MultiLang';
import { IInfo } from "../../interfaces/interfaces";
import { classModifier } from "../../utils";

import './Statistic.scss';


interface IStatisticProps {
  data: IInfo;
}


const Statistic = (props: IStatisticProps) => {


  return (
    <div>

    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  data: state.data.list,
});

export default connect(mapStateToProps)(Statistic)