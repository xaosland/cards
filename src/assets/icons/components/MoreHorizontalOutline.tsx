import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMoreHorizontalOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><g clipPath="url(#more-horizontal-outline_svg__a)"><path fill="currentcolor" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></g><defs><clipPath id="more-horizontal-outline_svg__a"><path fill="currentcolor" d="M0 0h24v24H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMoreHorizontalOutline);
const Memo = memo(ForwardRef);
export default Memo;