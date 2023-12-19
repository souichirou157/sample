  class PrioQueue {
        //コンストラクタ
        constructor() {
            //優先度キュー作成
            this.box1_ = []
            this.box2_ = []
            this.box3_ = []
        }

        enqueue(s, prio) {
            //第一引数の文字列検査
            if (typeof s === "string" || s instanceof String) {
                switch (prio) {
                    case 1:
                        this.box1_.push(s)
                        break;
                    case 2:
                        this.box2_.push(s)
                        break;
                    case 3:
                        this.box3_.push(s)
                        break;
                    default:
                        alert('引数の型か値が間違っています、優先度は整数型で1~3までの値を記入してください')
                        break;
                }
            } else {
                alert('引数の型が間違っています、格納する値は文字列型です')
                return
            }


        }

        dequeue() {
            if (this.box1_) {
                return this.box1_.shift()
            } else if (this.box2_) {
                return this.box2_.shift()
            } else if (this.box3_) {
                return this.box3_.shift()
            } else {
                alert('キューになにも格納されていません')
                return
            }
        }

        size() {
            return this.box1_.length + this.box2_.length + this.box3_.length
        }

    }

    //クラス(設計図)からインスタンス化(実体化)
    let queue1 = new PrioQueue()
    let queue2 = new PrioQueue()

    //それぞれのインスタンスのキューに要素を格納
    queue1.enqueue('test1', 1)
    queue1.enqueue('test2', 1)

    queue2.enqueue('aaa', 1)
    queue2.enqueue('bbb', 1)
    queue2.enqueue('ccc', 1)

    //それぞれのキューの要素数を調べる
    console.log(queue1.size());
    console.log(queue2.size());

    //それぞれのキューの中身を確認
    console.log('queue1.box1_:' + queue1.box1_);
    console.log('queue2.box1_:' + queue2.box1_);

    //それぞれのキューの優先度の高い要素を取り出す
    console.log(queue1.dequeue());
    console.log(queue2.dequeue());
