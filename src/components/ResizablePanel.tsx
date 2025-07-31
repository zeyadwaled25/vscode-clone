import { type ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  leftSide: ReactNode;
  rightSide: ReactNode;
}


const ResizablePanel = ({ defaultLayout = [33, 67], leftSide, rightSide }: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup autoSaveId="condition" direction="horizontal" onLayout={onLayout}>
      <Panel defaultSize={defaultLayout[0]}>
        {leftSide}
      </Panel>
      <PanelResizeHandle className="border-r border-[#64646473]"/>
      <Panel defaultSize={defaultLayout[1]}>
        {rightSide}
      </Panel>
    </PanelGroup>
  );
}

export default ResizablePanel;