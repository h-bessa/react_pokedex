const formatdate = (date:Date = new Date()): string => {
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}

export default formatdate