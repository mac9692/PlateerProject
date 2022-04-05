package com.plateer.employee.vo;


import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Comment {
    private Integer commentId;
    private Integer boardId;
    private String writer;
    private String content;
    private LocalDateTime registerDate;
    private LocalDateTime updateDate;
}
