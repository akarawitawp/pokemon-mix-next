import React from "react";
import { NextPage } from "next";
declare type NextCustomPage = Nextpage & {
    Layout?: React.FC<any>;
};