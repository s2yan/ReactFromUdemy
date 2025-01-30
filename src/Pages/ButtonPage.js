import Button from '../components/Button'

export default function ButtonPage(){
    return(
        <>
        <div className="col-span-3">
            <div>
                <Button primary>Click me</Button>
            </div>

            <div>
                <Button secondary>Click me</Button>
            </div>

            <div>
                <Button success >Click me</Button>
            </div>

            <div>
                <Button warning>Click me</Button>
            </div>

            <div>
                <Button danger>Click me</Button>
            </div>
        </div>
        </>
    )
}