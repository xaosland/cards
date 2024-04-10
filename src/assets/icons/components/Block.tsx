import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBlock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><g clipPath="url(#Block_svg__a)"><path fill="#000" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16" /><path stroke="#000" strokeWidth={2.3} d="m7.043 19.362 10-15" /></g><defs><clipPath id="Block_svg__a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBlock);
const Memo = memo(ForwardRef);
export default Memo;