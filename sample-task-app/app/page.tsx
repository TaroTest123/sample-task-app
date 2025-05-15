"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  completed: boolean;
}

const sampleTasks: Task[] = [
  {
    id: "1",
    title: "買い物に行く",
    description: "牛乳・卵・パンを購入する",
    dueDate: "2025-05-18",
    completed: false,
  },
  {
    id: "2",
    title: "Reactの勉強",
    description: "Hooksの使い方を復習する",
    dueDate: "2025-05-19",
    completed: true,
  },
  {
    id: "3",
    title: "ブログを書く",
    description: "Next.js + shadcn/ui の紹介記事を書く",
    dueDate: "2025-05-20",
    completed: false,
  },
  {
    id: "4",
    title: "健康診断を予約",
    description: "市の健康診断のWeb予約を行う",
    dueDate: "2025-05-22",
    completed: false,
  },
  {
    id: "5",
    title: "友人に誕生日メッセージを送る",
    description: "LINEでお祝いメッセージを送信",
    dueDate: "2025-05-18",
    completed: true,
  },
  {
    id: "6",
    title: "GitHubプロフィールを更新",
    description: "READMEとPinned Reposを整理する",
    dueDate: "2025-05-21",
    completed: false,
  },
  {
    id: "7",
    title: "読書タイム",
    description: "『Effective TypeScript』の2章を読む",
    dueDate: "2025-05-25",
    completed: false,
  },
  {
    id: "8",
    title: "クライアントへの請求書送付",
    description: "4月分の請求書をメールで送付",
    dueDate: "2025-05-17",
    completed: true,
  },
  {
    id: "9",
    title: "部屋の掃除",
    description: "クローゼットと窓の掃除をする",
    dueDate: "2025-05-20",
    completed: false,
  },
  {
    id: "10",
    title: "カフェで作業",
    description: "静かな場所で集中して作業を進める",
    dueDate: "2025-05-19",
    completed: false,
  },
];

export default function TaskListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(sampleTasks);
  }, []);

  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">📋 タスク一覧</h1>
      <div className="space-y-6">
        {tasks.map((task) => (
          <Card key={task.id} className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-3">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={(checked) => {
                    setTasks((prev) =>
                      prev.map((t) =>
                        t.id === task.id ? { ...t, completed: Boolean(checked) } : t
                      )
                    );
                  }}
                />
                <CardTitle className={task.completed ? "line-through text-muted-foreground" : ""}>
                  {task.title}
                </CardTitle>
              </div>
              {task.dueDate && (
                <CardDescription className="text-sm text-muted-foreground">
                  期限: {task.dueDate}
                </CardDescription>
              )}
            </CardHeader>
            {task.description && (
              <CardContent>
                <p className="text-sm text-gray-700">{task.description}</p>
              </CardContent>
            )}
            <CardFooter className="flex justify-end space-x-2">
              <Button size="sm" variant="outline">
                編集
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setTasks((prev) => prev.filter((t) => t.id !== task.id))}
              >
                削除
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
