import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMoreVerticalOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={12} r={8.5} stroke="currentcolor" /><g clipPath="url(#more-vertical-outline_svg__a)"><path fill="currentcolor" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-3.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></g><defs><clipPath id="more-vertical-outline_svg__a"><path fill="currentcolor" d="M6 6h12v12H6z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMoreVerticalOutline);
const Memo = memo(ForwardRef);
export default Memo;