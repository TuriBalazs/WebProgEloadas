

function Oojs() {



    return (
        <div className="h-48">

            <table border="1">
                <caption>Kezdő tábla</caption>
                <tr><th>Név</th><th>Cím</th><th>Fizetés</th><th>Tanszék</th><th>Tantárgyak</th></tr>
                <script type="text/javascript">
                    document.write("<tr><td>"+objects[0].nev+"</td><td>"+objects[0].cim+"</td><td>"+objects[0].fizetes+"</td><td>---</td><td>---</td></tr>");
                    document.write("<tr><td>"+objects[1].nev+"</td><td>"+objects[1].cim+"</td><td>"+objects[1].fizetes+"</td><td>"+objects[1].tanszek+"</td><td>"+objects[1].tantargyakSzama()+": "+objects[1].tantargyak+"</td></tr>");
                    document.write("<tr><td>"+objects[2].nev+"</td><td>"+objects[2].cim+"</td><td>"+objects[2].fizetes+"</td><td>"+objects[2].tanszek+"</td><td>"+objects[2].tantargyakSzama()+": "+objects[2].tantargyak+"</td></tr>");
                </script>
            </table>
            <script type="text/javascript">
                objects[0].fizetesModosit(50000);
                objects[2].fizetesModosit(25000);
                objects[1].tantargy("Programozás I");objects[1].tantargy("Programozás II");objects[1].tantargy("Vizuális programozás");
                objects[2].tantargy("Web-programozás I");objects[2].tantargy("Web-programozás II");
            </script>
            <br/>
                <table border="1">
                    <caption>Módosítások utáni tábla</caption>
                    <tr><th>Név</th><th>Cím</th><th>Fizetés</th><th>Tanszék</th><th>Tantárgyak</th></tr>
                    <script type="text/javascript">
                        document.write("<tr><td>"+objects[0].nev+"</td><td>"+objects[0].cim+"</td><td>"+objects[0].fizetes+"</td><td>---</td><td>---</td></tr>");
                        document.write("<tr><td>"+objects[1].nev+"</td><td>"+objects[1].cim+"</td><td>"+objects[1].fizetes+"</td><td>"+objects[1].tanszek+"</td><td>"+objects[1].tantargyakSzama()+": "+objects[1].tantargyak+"</td></tr>");
                        document.write("<tr><td>"+objects[2].nev+"</td><td>"+objects[2].cim+"</td><td>"+objects[2].fizetes+"</td><td>"+objects[2].tanszek+"</td><td>"+objects[2].tantargyakSzama()+": "+objects[2].tantargyak+"</td></tr>");
                    </script>
                </table>
        </div>
    )
}

export default Oojs