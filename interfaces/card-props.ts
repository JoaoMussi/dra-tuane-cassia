import { ReactElement } from "react";
import { NextImageAttrs } from "./image-attributes";

export interface CardProps {
	title: string;
	description?: string;
	imageAttrs?: NextImageAttrs;
	actions?: ReactElement;
}
