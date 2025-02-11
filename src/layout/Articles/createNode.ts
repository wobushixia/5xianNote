export interface ArticleNode {
    parent: ArticleNode | null;
    step: number;
    href: string;
    name: string;
    children: Array<ArticleNode>;
  }
  
export const allNodeArray: Array<ArticleNode> = [];
  
export interface nodeTree {
  step: number;
  nodeArray: Array<ArticleNode>;
}

  export const setGlobalNode = (name: string,doAddNodeArray?: boolean) => {
    const globalNode: ArticleNode = {
      parent: null,
      step: 0,
      href: `#`,
      name: name,
      children: [],
    };
    if(doAddNodeArray!==false){allNodeArray.push(globalNode)};
    return globalNode;
  };
  
  export const setNode = (
    name: string,
    parentNode: ArticleNode,
    doAddChild?: boolean
  ) => {
    const articleNode: ArticleNode = {
      parent: parentNode,
      step: parentNode.step + 1,
      href: `#${name}`,
      name: name,
      children: [],
    };
    allNodeArray.push(articleNode);
    if (doAddChild !== false) addChildNode(articleNode, parentNode);
    return articleNode;
  };
  
  const addChildNode = (childNode: ArticleNode, parentNode: ArticleNode) => {
    parentNode.children.push(childNode);
  };
  export const nodeSelectorAll = (
    method: string,
    primaryNode: ArticleNode,
    args: { step?: number; name?: string }
  ) => {
    if(method==='step' && args.step!==undefined){
      let nodeArray:Array<ArticleNode> = []
      let parentNodeArray:Array<ArticleNode> = [primaryNode]
      if(args.step===primaryNode.step){
        return [primaryNode]
      }
      if(args.step===primaryNode.step+1){
        for(let j=0;j<parentNodeArray.length;j++){
          const parentNode = parentNodeArray[j]
          if(parentNode.children[0]){
            for(let m=0;m<parentNode.children.length;m++){
              if(parentNode.children[m]&&parentNode.children[m].step===args.step){
                nodeArray.push(parentNode.children[m])
              }else if(parentNode.children[m]){
                if(m===0){parentNodeArray=[]}
                parentNodeArray.push(parentNode.children[m])
              }
            }
          }
        }
        return nodeArray
      }
      for(let i=primaryNode.step;i<args.step;i++){
        const currentParentNodeArray:Array<ArticleNode> = []
        for(let j=0;j<parentNodeArray.length;j++){
          const parentNode = parentNodeArray[j]
          if(parentNode.children){
            for(let m=0;m<parentNode.children.length;m++){
              if(parentNode.children[m].step===args.step){
                nodeArray.push(parentNode.children[m])
              }else{
                currentParentNodeArray.push(parentNode.children[m])
              }
            }
          }
        }
        parentNodeArray = currentParentNodeArray
      }
      return nodeArray
    }else if(method==='name'&&args.name!==undefined){
      const nodeArray:Array<ArticleNode> = []
      allNodeArray.forEach((ele)=>{
        if(ele.name===args.name){
          nodeArray.push(ele)
        }
      })
      return nodeArray
    }
  }
  export const getNodeTree = (primaryNode: ArticleNode) => {
    const nodeTreeArray: Array<nodeTree> = [];
    const dynamicsComputedNodeByStep = (i:number)=>{
      return nodeSelectorAll('step',primaryNode,{step:i})
    }
    let i: number = primaryNode.step;
    let result
    while ((result = dynamicsComputedNodeByStep(i)) !== undefined && result.length !== 0) {
      nodeTreeArray.push({step:i,nodeArray:result})
      i++;
    }
    return nodeTreeArray;
  };