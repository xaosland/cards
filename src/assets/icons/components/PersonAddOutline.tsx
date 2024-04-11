import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPersonAddOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><g clipPath="url(#person-add-outline_svg__a)"><path fill="currentcolor" d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 1 0 0-2m-11 5a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 8a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 1 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7" /></g><defs><clipPath id="person-add-outline_svg__a"><path fill="currentcolor" d="M0 0h24v24H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPersonAddOutline);
const Memo = memo(ForwardRef);
export default Memo;